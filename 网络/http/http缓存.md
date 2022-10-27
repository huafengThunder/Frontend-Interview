#### 强缓存(200)
- 优先级Cache-Control > Expires
- Expires控制多少秒后过期
- Cache-Control
  - no-cache强制向源服务器发送请求:304
  - no-store不缓存请求或相应的任何内容:200，即资源本身
#### 协商缓存
- etag > last-modifified
- last-modifified根据时间进行对比
- etag根据文件内容的hash做对比
#### 缓存的位置一般在磁盘，和内存中