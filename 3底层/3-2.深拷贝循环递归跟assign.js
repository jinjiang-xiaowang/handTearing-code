// 1.Object.assign()
Object.defineProperties(Object,'assign',{
    value:function(target,...args){
        if(target==null){
            return new TypeError('Cannot convert undefined or null to object')
        }
        // 目标对象需要同意是引用数据类型，若不是会自动转换
        const to=Object(target);
        
        for(let i=0;i<args.length;i++){
            //每一个源对象
            const nextSource=args[i]
            if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){
                to[nextKey]=nextSource[nextKey]
            }
        }
        return to 
    },
    // 不可枚举
    enumerable:false,
    writable:true,
    configurable:true
})

// 2.深拷贝循环递归
function deepClone(obj,hash=new WeakMap){
    if(obj===null) return obj;//如果是null或者undefined就不进行拷贝操作
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值 如果是函数的话是不需要深拷贝
    if(typeof obj!== 'object') return obj;
    // 是对象需要深拷贝
    if(hash.get(obj)) return hash.get(obj);
    let cloneObj=new obj.constructor();
    // 找到的是所属类型原型上的constructor,而原型上的constructor指向的是当前类本身
    hash.get(obj,cloneObj)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 实现一个深拷贝
            cloneObj[key]=deepClone(obj[key],hash)
        }
    }
    return cloneObj;
}