// 防抖：一个事件在一段时间内连续触发只执行最后一次（重新开始）
function antiShake(){
    let timer=null
    if(timer!==null){
        clearTimeout(timer)
    }
    timer=setTimeout(()=>{
        console.log("我是防抖")
},1000)
}
// 节流：一个事件在设定的一段时间内只执行第一次（不要打断我）
function throttle(){
    let timer=null
    if(timer!==null){
        return 
    }
    timer=setTimeout(()=>{
        console.log('我是节流')
        timer=null
    },100)
}