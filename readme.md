### moka react exercise




1. install dependencies
    ```js
        npm install
    ```
2. setup application
    
    * development 
    
    ```$xslt
       npm run dev
    ```
    then open browser and visit [`localhost:8080/dist/index.html`](http://localhost:8080/dist/index.html)
    
    * production 
        
    ```$xslt
       npm run product
    ```
    the finally codes will be output at `./dist`, then server it by nginx or other web servers
    
    in case of ngnix , we can simply config like this
     
     ```
       server {
               listen       80;
               root  ~/Projects/ReactExercise/dist;
               location / {
                  index index.html;
                  try_files $uri $uri/ /index.html =404;
               }
           }
    ```
    
    
    
    
    
    
******

time schedule
 
 
 | 功能        | 消费时间 | 描述 | bug或可预见bug |
 | ------------- |:-------------:| :-----:|-----:|
 | 环境搭建      | 8小时      | 在基于weboack构建的环境搭建上花费了大量时间,期间遇到一些配置的bug| 生产环境的webpack配置还不够完善,可预见的是hash值的处理,eslint规范未打开 |
 | 代码框架      | 2小时      | 常规业务代码框架 | 常规搭建,未使用redux等数据中控 |
 | 业务需求      | 3小时      | 实现具体业务需求 | 在业务处理和性能调优化上还可以深入处理 |
 
 
 
 
 
 