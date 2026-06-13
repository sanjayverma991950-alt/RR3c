// function getData(dataId,getNextData){
//     setTimeout(() =>{
//         console.log("DataId:" +dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// })



function getData(dataId){
    return new Promise((resolve,reject)=>{
        getTimeout(()=>[
            console.log("Data is :"+ dataId)
            reject("its not fullfilled")

        ],3000)
    })
}
getData(1).then(()=>getData(2)).then(()=>getData()).catch((err)=>)