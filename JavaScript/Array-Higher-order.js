// num=[2,3,4,5,6,7,8,]
// num.array.forEach(element => {
//     console.log(element)
// });

// num.map(i =>{
//     console.log(i*2)
// })
// console.log(num)
num=[25000,35000,40000,50000]
num.map(i=>{
    console.log(i+i*0.03)
})
const even=num.filter(i=>{
        return i%2===0
})
console.log(even)
const large=num.find(i=>{
    return i>=30
})
console.log(large)