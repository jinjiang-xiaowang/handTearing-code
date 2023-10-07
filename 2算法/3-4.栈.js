// 
// Design a stack that supports push, pop and find the minimum element in
// constant time（O(1)）.
// •push(x) -- Push element x onto stack. •pop() -
// - Get the top element and remove it. •getMin() -
// - find the minimum element in the stack.
// 要求：
// 不能使⽤字符串相关函数
// 不能⽤-1
// 不能⽤⻓度函数、count、length
// pop、push⾥不能⽤删除、unset
// pop、push⾥不能⽤循环（包括但不限于while、for in、foreach等）
// 不能⽤数组的push、pop函数
// 不能⽤splice等相关函数
// ⽰例:

class MinStack{
    constructor(){
        this.stack=[];
        this.minValue=[]
    }

push(x){
    if(this.stack.length===0){
        this.stack[this.stack.length]=x
        this.minValue[this.minValue.length]=x
        return 
    }
    if(x<=this.minValue[this.minValue.length-1]){
        this.minValue[this.minValue.length]=x
    }
    this.stack[this.stack.length]=x
}
pop(){
    if(this.stack.length===0){
        return ;
    }
    if(this.stack[this.stack.length-1]===this.minValue[this.minValue.length-1]){
       
        this.minValue.length=this.minValue.length-1
        this.stack.length=this.stack.length-1
        return
    }
    this.stack.length=this.stack.length-1
    
}
getMin(){
    return this.minValue[this.minValue.length-1]
}
}

// 示例用法
const stack = new MinStack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)
stack.getMin()
stack.push(4)
stack.pop()
stack.pop()
stack.pop()
console.log(stack)





