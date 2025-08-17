console.log('calculater')
let calculater={
    add(x,y)
    {
        let result=x+y;
        return result;
    },
    sub(x,y)
    {
        let result=x-y;
        return result;
    },
    multiply(x,y)
    {
        let result=x*y;
        return result;
    }
}
console.log(calculater.add(5,6))
console.log(calculater.sub(10,4))
console.log(calculater.multiply(3,7))