#### webpack思想
  - 万物都是文件,最终构建也是文件
  - webpack开发时,文件是存在内存中,5出现了后,是可以配置内存/磁盘
#### 首先安装webpack-cli
#### 配置webpack配置文件（入口/出口/load/plugin）
  - load和plugin有啥区别
    - loader
      - 文件加载器,能够加载资源(执行顺序从右到左);
      - Loader的职责是单一的，只需要完成一种转化
      - load本身就是一个函数,接受文件返回转化后的文件(一个文件还可以链式的经过多个loader转化;如 scss-loader => css-loader => style-loader)
    - plugin功能更加强大
      - 打包优化/压缩/定义环境变量更加丰富
  - 有用到过哪些load,手写过么
    - file-loader文件加载
    - url-loader文件加载,设置阈值,小于转base64
    - raw-loader将文件以为字符串的形式返回
    - images-loader图片loader
    - json-loader其实有内置
    - babel-loader将js语法进行降级
    - ts-loader将ts转为js
    - awesome-typescript-loader: 比ts-loader性能好一些
    - style-lader在head插入style标签
    - css-loader
    - sass-loader处理sass的loader
    - vue-loader加载vue单文件组件
    - i18n-loader处理国际化
    - cache-loader将结果缓存到磁盘,减少内存消耗
    - svg-inline-loader压缩后的svg插入到代码中
    - eslint-loader对文件进行eslint校验
  - 有用到过哪些plugin,手写过么
    - terser-webpack-plugin支持压缩ES6
    - webpack-arallel-uglify-plugin多进程执行代码压缩，提升构建速度
    - mini-css-extract-plugin分离样式文件,支持按需加载
      - 如何按需加载
    - extract-text-webpack-plugin将js文件中引用的样式单独抽离成css文件
    - optimize-css-assets-webpack-plugin不同组件中重复css快速去掉
    - clean-webpack-plugin目录清理
    - speed-measure-webpack-plugin分析loader的plugin执行耗时
    - webpack-bundle-analyzer打包后文件大小分析
    - ProviderPlugin自动加载模块插件,
    - html-webpack-plugin自动生成html代码
    - CommonsChunkPlugin内置,将第三方库和业务代码分离
    - DefinePlugin定义环境变量
    - DllPlugin和DllReferencePlugin打包第三方库,避免以后重新构建
    - HotModuleReplacementPlugin热更新
      - 热更新原理
    - compression-webpack-plugin生产中使用gzip压缩js或css文件,其实nginx本身就能压缩给浏览器;所以实用性并不强
