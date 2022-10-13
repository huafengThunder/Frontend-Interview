// 原型链继承缺点
function Anime(){}
function Dog(){}
Dog.prototype = new Dog()
Anime.prototype.name = 'Anime'
let Dog1 = new Dog('dog1') 
let Dog2 = new Dog('dog2') // 在父类构造函数中Anime没法接收到
Dog1.__proto__.name = 'Dog1' // 父类构造函数的原型上的属性/方法被修改
Dog2.constructor.prototype.name = 'Dog2'
console.log(Dog1.__proto__, Dog1.constructor)
console.log(Dog1.name, Dog2.name) // 实例anime1和是anime2的age属性都被修改

// 构造函数继承缺点
function Anime(name){
  this.name = name
}
function Dog(){}