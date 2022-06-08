# -*- coding: utf-8 -*-
from biodatabase import *

if __name__ == "__main__":
    # article  = Articles(title = "谷歌",time = "2020-12-06T13:19",content = "aeraerwrwrw")
    # db.session.add(article)
    # db.session.commit()
    # article = Articles.query.order_by(Articles.id)[-2:]
    # print(article[0].title)

    files = Files.query.all()
    print(files)