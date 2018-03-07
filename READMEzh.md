[English document](https://github.com/smackgg/hexo-theme-smackdown/blob/master/README.md)
---
关于
===
这是很早之前写的一个比较浮夸的hexo主题，虽然说有一点脱离了简约。。。有时间写一个简约点的主题。

**喜欢的这个主题话点个star。**

有什么问题提issue，看到了一定争取解决。

___

**2015-07-28 17:28:18**

很早就搭出的博客，一直没有时间折腾，大三的时间实在是太紧了。这段时间终于腾出点时间，能让我好好的收拾一下自己的博客。将主题优化了一下，本主题基于 [Yilia](https://github.com/litten/hexo-theme-yilia) 主题更改。主题地址[smackdown](https://github.com/smackgg/hexo-theme-smackdown)。

**可以点击进入[我的个人博客](http://oldblog.smackgg.cn/)查看效果**

**体验手机版的可以扫下面的二维码。**

![二维码](http://7xkj1z.com1.z0.glb.clouddn.com/1520411791.png "GitHub Mark")

---

一、关于主题
---
- 响应式开发
- 崇尚极致的性能。
- 主题能很好的兼容移动端。
- 在 yilia 的基础上做了SEO优化, 添加了关键字和描述。
- 主题不支持IE6，7，8。以后也不会

二、使用细节
---
**安装**

```
$ git clone https://github.com/smackgg/hexo-theme-smackdown themes/smackdown
```

**配置**

修改hexo根目录下的 ```_config.yml``` 文件
```js
theme: smackdown
```

**更新**
```Bash
cd themes/yilia
git pull
```

三、配置
---
主题配置文件在主目录下的_config.yml，请根据自己需要修改使用。 完整配置例子，可以参考[我的博客备份](https://github.com/smackgg/myHexo)

```
# Header
menu:
  主页: /
  所有文章: /archives
  # 随笔: /tags/随笔

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

# 是否开启动画效果
animate: true

# 是否在新窗口打开链接
open_in_new: false

# 百度统计、谷歌统计
# baidu_tongji: true
# google_analytics: true

favicon: http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg

#你的头像url
avatar: http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg

#是否开启分享
share: true

#是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
#若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
# duoshuo: your duoshuo id

#是否开启云标签
tagcloud: true

#是否开启文章阅读量
leancloud_visitors:
  enable: false
  # app_id: your app_id
  # app_key: your app_key


#是否开启友情链接
#不开启——
#friends: false
#开启——
friends:
  smackdown: https://github.com/smackgg/hexo-theme-smackdown
#是否开启“关于我”。
#不开启——
aboutme: false
#开启——
# aboutme:

swift_search:
  enable: true
```

四、其它
---
- **关于阅读数**

  想要添加阅读数需要再进行一些操作，需要注册[leancloud](https://leancloud.cn)账号，添加appid和appkey至主题的```_config.yml```文件中相应位置。
  ```
  #是否开启文章阅读量
  leancloud_visitors:
    enable: false
    app_id: your_app_id
    app_key: your_app_key
  ```
  详细过程见：[为smackdown添加阅读数](http://blog.smackdown.gebilaowu.cn/2016/10/31/hexo%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E9%98%85%E8%AF%BB%E6%95%B0/)

- **关于多说**

  同理，自己注册多说账号，添加到主题配置文件的相应位置。

五、近期更新
---

Update: 2016-10-31
- 更新https加载js问题
- 更新readme

Update: 2016-12-14
- 修复分享在https下的bug,用多说分享代替jiathis。
