function _reverse(number){
   if(number>=0){
    return String(number).split('').reverse().join('')*1
   }else{
    return '-'+String(Math.abs(number)).split('').reverse().join('')*1
   }
}
console.log(_reverse(112))
