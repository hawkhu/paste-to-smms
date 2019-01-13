# paste-to-smms
A extension for VS code, directly paste image from clipboard to sm.ms

一个VS code扩展，可以将剪贴板内的图像直接上传到sm.ms图床，并自动插入图片。

## Introduction
Take a screenshot with any tools， then Ctrl+Shift+p， type a “p” to invoke command hints，select “Paste to sm.ms”.Your image will be uploaded to sm.ms.And this extension will insert markdown image element \!\[\]\(\) automatically。
 
使用任意工具截图，然后按Ctrl+Shift+p呼出命令窗口，输入“p”唤出命令提示，选择“Paste to sm.ms”。你复制的图片就会自动上传到sm.ms，并且在你编辑的md文档中自动插入图片。
## Install

![install.gif](https://upload-images.jianshu.io/upload_images/8985600-b459eb99bd66e00b.gif?imageMogr2/auto-orient/strip)

## Use 

![use.gif](https://upload-images.jianshu.io/upload_images/8985600-c8acfc3c81618c96.gif?imageMogr2/auto-orient/strip)



## Release note

- 2019-01-13 v1.1.0      
    
  >修改了windows下图片暂存目录以防止读写权限问题
  >Change temp images's path for win


- 2019-01-13 v1.1.0      
    
  >添加windows支持，win7 Enterprise 64位测试通过
  >Candy for windows，win7 Enterprise 64 tested.Enjoy


- 2019-01-12 v1.0.0      
    
  >首个版本发布
  仅支持Linux，基本排除MacOS支持（因为没有测试环境），有可能增加windows支持
  >first release
  Linux only, no plan for MacOS yet, maybe Windows will get candy.

## Dependence
 - xclip for Linux
 - curl for Linux


