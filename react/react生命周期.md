- 挂载阶段
  - construtor(构造器)
    - 通过this.state赋初始值
    - 给事件绑定处理函数
    - 通过super继承props
  - componentWillMount(组件将要挂载,在构造器后调用,React中不建议的钩子)
  - render(用于渲染DOM,必须返回ReactDOM;不要再render使用setState，会触发死循环)
  - componentDidMount(组价挂载完毕)
- 更新阶段
  - componentWillRecceiveProps(组件将要接收props;React中不建议的钩子)
  - shouldComponentUdapte(在渲染执行前被调用,首次渲染不会出发该方式)
  - componentWillUpdate(​组件将要更新,会触发这个钩子函数)
  - render
  - componentDidUpdate
- 卸载阶段
  - componentWillUnmount
- 强制更新Api
  - forceUpdate,触发componentWillUpdate,但是不会有shouldComponentUdapte