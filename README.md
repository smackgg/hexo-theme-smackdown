查看[中文文档](https://github.com/smackgg/hexo-theme-smackdown/blob/master/READMEzh.md)
---
ABOUT
===
This is a quite flamboyant hexo theme wrote by me long time ago.Actually, it's really not simple...

**If you like this theme, please star, thanks**

If you have some problems, you can submit an issue.I will fixed it.

___

**2015-07-28 17:28:18**

This theme changed based on [Yilia](https://github.com/litten/hexo-theme-yilia) .This theme site is [smackdown](https://github.com/smackgg/hexo-theme-smackdown).

**You can go to [my blog](http://oldblog.smackgg.cn/) to see**

**You also can scan QR code on your mobile devices**

![QR code](http://7xkj1z.com1.z0.glb.clouddn.com/1520411791.png "GitHub Mark")

---

1. About this theme
---
- Responsive Development
- Performance
- Compatible mobile
- SEO
- But don't support IE6，7，8


2. Details
---
**Install**

```
$ git clone https://github.com/smackgg/hexo-theme-smackdown themes/smackdown
```

**config**

Modify the root directory under your hexo ```_config.yml``` file.
```js
theme: smackdown
```

**Update**
```Bash
cd themes/yilia
git pull
```

3. Theme config
---
You should change 'config.yml' file under your theme directory.
You can reference [my blog](https://github.com/smackgg/myHexo).

```
# Header
menu:
  Home: /
  All: /archives
  # other: /tags/other

# SubNav
subnav:
  # github: "#"
  # zhihu: "#"
  # mail: "#"
  # qq: "#"
  # weibo: "#"
  # rss: "#"
  #douban: "#"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

rss: /atom.xml

# Content
# excerpt_link: 阅读全文
excerpt_link: more
fancybox: true
mathjax: true

# Open animate
animate: true

# Open page in new window
open_in_new: false

# Baidu statistics，Google statistics
# baidu_tongji: true
# google_analytics: true

favicon: http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg

# Your Head portrait
avatar: http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg

# Open share
share: true

# You can open duoshuo, you should have a duoshuo-key. duoshuo: duoshuo-key
# You can use disqus
# duoshuo: your duoshuo id
# disqus_shortname: your disqus shortname

# Open tagcloud
tagcloud: true

# Read the article number(you should use leancloud)
leancloud_visitors:
  enable: false
  # app_id: your app_id
  # app_key: your app_key


# Links close
#friends: false
# Links open
friends:
  smackdown: https://github.com/smackgg/hexo-theme-smackdown
# Aboutme close
aboutme: false
# Aboutme open
# aboutme:

swift_search:
  enable: true
```

4. Other
---
- **Read the article number**

  If you wangt add this，you should have [leancloud](https://leancloud.cn) account.Then add appid and appkey to ```_config.yml```.
  ```
  # Read the article number
  leancloud_visitors:
    enable: false
    app_id: your_app_id
    app_key: your_app_key
  ```
  You can see details in [为smackdown添加阅读数](http://blog.smackdown.gebilaowu.cn/2016/10/31/hexo%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E9%98%85%E8%AF%BB%E6%95%B0/)



5. Recent Update
---

Update: 2016-10-31
- Update https issue
- Update readme
Update: 2016-12-14
- Fixed bug about share on https.Use duoshuo share instead jiathis。
