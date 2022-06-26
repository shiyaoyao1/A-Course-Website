from flask import render_template,request,redirect,url_for,session,make_response,jsonify,flash,send_from_directory
from werkzeug.utils import secure_filename
import os
from biodatabase import *
import json 

@app.route('/')
def index():
    articles = Articles.query.order_by(Articles.id)[-2:]
    return render_template('index.html',articles = articles)

@app.route('/Login', methods=['POST', 'GET'])
def login():
    # print('aaaaaaaaa',request.method)
    if request.method=='POST':
        data = json.loads(request.get_data(as_text=True))
        # print('aaaaaaaaa',data)
        name=data['name']
        password = data['password']
        user = Users.query.filter_by(name=name).first()

    if user:
        if password == user.password:

            session[user.name] = {user.roleID:user.name}
            if user.roleID == 1:
                # flash('管理员登录成功！')
                userdata = {'roleID':user.roleID,'name':user.name}
                return jsonify(userdata)
            elif user.roleID == 2:
                # flash('用户登录成功！')
                userdata = {'roleID':user.roleID,'name':user.name}
                return jsonify(userdata)
        else:
            # flash('密码错误')
            userdata = {'roleID':None,'name':user.name}
            return jsonify(userdata)
    else:
        # flash('账户不存在，请注册')
        userdata = {'roleID':None,'name':None}
        return jsonify(userdata)
    # return render_template('login.html')

# @app.route('/showaddarticle')
# def showAddArticle():
#     return render_template('addArticle.html')

# @app.route('/showarticle/<int:article_id>')
# def showArticle(article_id):
#     article = Articles.query.get(article_id)
#     return render_template('article.html',article = article)

@app.route('/articleEdit',methods = ['POST', 'GET'])
def articleEdit():
    if request.method=='POST':
        data = json.loads(request.get_data(as_text=True))
        if data:
            # print('aaaaaaaaa',data)
            id=data['id']
            title = data['title']
            time =data['time']
            content =data['content']
            article = Articles.query.filter_by(id=id).first()
        else:
            return jsonify({False:'解析json失败。'})

        if id==None:
            db.session.add(Articles(title=title,time=time,content=content))
            db.session.commit()
            db.session.close()
            return jsonify({True:'存储成功。'})

        elif content==None:
            db.session.delete(article)
            db.session.commit()
            db.session.close()
            return jsonify({True:'删除成功。'})

        elif article.content==content:
            db.session.update({article.content:content}, synchronize_session=True)
            db.session.commit()
            db.session.close()
            return jsonify({True:'修改成功。'})
    

""" @app.route('/syllabus')
def showSyllabus():   
    files = Files.query.all()
    return render_template('syllabus.html',files = files) """

@app.route('/download')
def downloadPage():
    basepath = os.path.dirname(__file__)
    filePath=os.path.join(basepath, "./files/")
    for root, subdirs, files in os.walk(filePath):
        return jsonify({'fileList':files})
    
@app.route('/download<fileName>')
def downloadFile(fileName):
    basepath = os.path.dirname(__file__)
    filePath=os.path.join(basepath, "./files/")
    return send_from_directory(filePath, fileName, as_attachment=True)

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
    articleList=[]
    for article in articles:
        articleTemp={}
        articleTemp['id']=article.id
        articleTemp['title']=article.title
        articleTemp['time']=article.time
        articleTemp['content']=article.content
        articleList.append(articleTemp)
    return jsonify(articleList)
    # return render_template('listArticles.html',articles = articles)


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
    # articles = Articles.query.all()
    # for article in articles:
