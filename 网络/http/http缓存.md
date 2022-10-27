#### 强缓存(200)
- 优先级Cache-Control > Expires
- Expires控制多少秒后过期
- Cache-Control
  - no-cache强制向源服务器发送请求:304
  - no-store不缓存请求或相应的任何内容:200，即资源本身
  - pulic可以向任一方提供响应缓存,包括对代理服务器
  - private特定一方提供响应缓存（一把泛指客户端）
  - max-age浏览器缓存的时间限制
  - s-maxage设定代理服务器的缓存时间
  - 上面字段的优先级别:
#### 协商缓存
- etag > last-modifified
- last-modifified根据时间进行对比
  - If-Modified-Since 能检查到的粒度是秒级的,所以秒内该的文件可能会对比失败
- etag根据文件内容的hash做对比
  - 对比准确,但是生成hash对比耗时长些。性能不如时间对比
#### 缓存的位置一般在磁盘，和内存中