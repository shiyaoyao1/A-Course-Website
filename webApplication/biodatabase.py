# -*- coding: utf-8 -*-

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)

class Config(object):
    """配置参数"""
    # 设置连接数据库的URL
    user = 'dbuser'
    password = '123456'
    database = 'flask'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://%s:%s@127.0.0.1:3306/%s?charset=utf8' % (user,password,database)

    # 设置sqlalchemy自动更跟踪数据库
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    # 查询时会显示原始SQL语句
    app.config['SQLALCHEMY_ECHO'] = True

    # 禁止自动提交数据处理
    app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = False
    
    # 定义上传文件夹
    app.config['UPLOAD_FOLDER'] = 'upload/'

# 读取配置
app.config.from_object(Config)                             

# 创建数据库sqlalchemy工具对象
db = SQLAlchemy(app,use_native_unicode='utf8')

class Articles(db.Model):
    # 定义表名
    __tablename__ = 'articles'
    # 定义字段
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    title = db.Column(db.String(64), unique=True)
    time = db.Column(db.String(64))
    content = db.Column(db.String(1000))
    # 定义字符集
    __table_args__ = {
    "mysql_charset" : "utf8"
    }

class Files(db.Model):
    # 定义表名
    __tablename__ = 'files'
    # 定义字段
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    filename = db.Column(db.String(64), unique=True)
    filepath = db.Column(db.String(64))
    # 定义字符集
    __table_args__ = {
    "mysql_charset" : "utf8"
    }   

class ArticleFiles(db.Model):

    __tablename__ = 'articlefiles'

    article_id = db.Column(db.Integer, db.ForeignKey('articles.id'),primary_key=True)
    file_id = db.Column(db.Integer, db.ForeignKey('files.id'),primary_key=True)


if __name__ == '__main__':

    # 删除所有表
    db.drop_all()

    # 创建所有表
    db.create_all()