#### mutation和action的区别,各自使用场景;为什么需要mutation
- action的作用只是一个架构性的概念，并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutations 就行
- mutation执行完成后都可以对应到一个新的状态
