// function inherit(ChildrenClass,SuperClass){
//     ChildrenClass.prototype=Object.create(SuperClass.prototype)
//     ChildrenClass.prototype.constructor=ChildrenClass;
// }
// function SuperClass(){
//     this.propA='a'
// }
// function ChildrenClass(){
//    SuperClass.call(this)
//    this.propB='b'
// }
// inherit(ChildrenClass,SuperClass)

// function A(name){
//     this.name=name;
// }
// A.prototype.getName=function(){
//     console.log(this.name)
// }
// es5写法
// function B(){
//     A.apply(this,arguments)
// }
// const _proto_=Object.create(A.prototype);
// _proto_.constructor=B;
// B.prototype=_proto_;
// const b=new B('lisa');
// B.getname();

// es6写法
class A{
    constructor(name){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
}
class B extends A{
    constructor(name){
        super(name);
    }
}
const b=new B('lisa');
console.log(b.name);
