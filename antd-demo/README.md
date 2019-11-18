## 仅供前端测试用的简单后端代码
### Note
已经打包了整个项目,数据库用的云端数据库(已初始化好), 第一次使用时请先用maven导入依赖。相关的API可查看src/controller/DocumentController.java文件。
### Important
#### 数据库相关
* 如果需要设置为自己的数据库, 每次启动项目前请手动删除数据库并重建(无需建表)。
* 如果数据库是建立在linux上, 请修改mysqld.conf文件,添加
* [mysql]
  default-character-set=utf8mb4
* [mysqld]
  character-set-server=utf8mb4
  collation-server=utf8mb4_unicode_ci
