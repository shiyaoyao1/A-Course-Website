from flask import render_template,request,redirect,url_for,session,make_response,jsonify,flash
from werkzeug.utils import secure_filename
import os
from biodatabase import *

@app.route('/')
def index():
    articles = Articles.query.order_by(Articles.id)[-2:]
    return render_template('index.html',articles = articles)

@app.route('/Login', methods=['POST', 'GET'])
def login():
    if request.method=='GET':
            name=request.args.get('name')
            password = request.form.get("password")
            user = Users.query.filter_by(name=name).first()

    # if request.method == 'POST':
    #     stuID = request.form.get("userID")
    #     password = request.form.get("password")
    #     user = Users.query.filter_by(stuID=stuID).first()
    if user:
        if password == user.password:

            session[user.name] = {user.roleID:user.name}
            if user.roleID == 1:
                flash('管理员登录成功！')
                userdata = {'role':user.roleID,'name':user.name}
                return jsonify(userdata)
            elif user.roleID == 2:
                flash('用户登录成功！')
                userdata = {'role':user.roleID,'name':user.name}
                return jsonify(userdata)
        else:
            flash('密码错误')
    else:
        flash('账户不存在，请注册')
    # return render_template('login.html')

@app.route('/showaddarticle')
def showAddArticle():
    return render_template('addArticle.html')

@app.route('/showarticle/<int:article_id>')
def showArticle(article_id):
    article = Articles.query.get(article_id)
    return render_template('article.html',article = article)

@app.route('/addarticle',methods = ['POST', 'GET'])
def addArticle():
    if request.method == 'POST':
        # title = request.form['Title']
        # time = request.form['Time']
        # content = request.form['Content']
        article = Articles(title = request.form['Title'],time = request.form['Time'],content = request.form['Content'])
        db.session.add(article)
        db.session.commit()
        db.session.close()

    return redirect(url_for('index'))

""" @app.route('/syllabus')
def showSyllabus():   
    files = Files.query.all()
    return render_template('syllabus.html',files = files) """

@app.route('/upload')
def upload_file():
   return render_template('upload.html')

""" @app.route('/uploader', methods = ['GET', 'POST'])
def uploader():
   if request.method == 'POST':
        file_name = request.form['filename']   
        f = request.files['file']
        f.save(os.path.join(app.config['UPLOAD_FOLDER'],secure_filename(f.filename)))
        file = Files(filename = file_name,filepath = secure_filename(f.filename))
        db.session.add(file)
        db.session.commit()
        db.session.close()
        return redirect(url_for('upload_file')) """

@app.route('/listarticles')
def listArticles():
    articles = Articles.query.all()
    return render_template('listArticles.html',articles = articles)

@app.route('/editarticle/<int:article_id>')
def editArticle(article_id):
    article = Articles.query.get(article_id)
    return render_template('editArticle.html',article = article)

@app.route('/updatearticle/<int:article_id>',methods = ['POST', 'GET'])
def updateArticle(article_id):
    article = Articles.query.get(article_id)
    if request.method == 'POST':
        article.title = request.form['Title']
        article.time = request.form['Time']
        article.content = request.form['Content']
        db.session.commit()
        db.session.close()
    return redirect(url_for('listArticles'))

@app.route('/deletearticle/<int:article_id>')
def deleteArticle(article_id):
    article = Articles.query.get(article_id)
    db.session.delete(article)
    db.session.commit()
    db.session.close()
    return redirect(url_for('listArticles'))

if __name__ == "__main__":
    # app.run(host='0.0.0.0',port=80)
    app.run(debug=True)