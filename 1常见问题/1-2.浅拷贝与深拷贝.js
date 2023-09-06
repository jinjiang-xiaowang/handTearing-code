// 浅拷贝属性是基本类型是值 引用类型是内存地址 
// 深拷贝开辟一个新的栈 对象属性完全相同 但是地址不同
var obj={
    age:10,
    nature:['a','b'],
    names:{
        name1:'1',
        name2:'2'
    },
    love:function(){
       console.log('hello')
    }
}
// 浅拷贝：
// 1.Object.assign只会拷贝源对象自身可枚举的属性 不能拷贝继承属性和不可枚举的属性
// var newObj=Object.assign({},obj)

// 2.数组的slice concat方法; 扩展运算符
// console.log({...obj})

// 深拷贝：
// 1._.cloneDeep() lodash
// const _ = require('lodash');
// var newObj=_.cloneDeep(obj)

// 2.jQuery.extend() jq
// const $=require('jquery')
// var newObj=$.extend(true,{},obj)

// 3.JSON.stringify  会忽略symbol undefined 函数
// var newObj=JSON.parse(JSON.stringify(obj)) 
// 补充：js对象转json格式 JSON.stringify() json转js JSON.parse()

// 深拷贝循环递归 assign原理到3底层文件查看