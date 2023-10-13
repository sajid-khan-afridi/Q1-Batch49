function fetchData(callback){
    const data="Data is fetched"
    setTimeout(() => {
        callback(data)
    }, 1000);
}

function processData(data){
   console.log(data) 
} 

console.log("before");
fetchData(processData);
console.log("after");


// function fetchData(){
//     let data="Data is fetched"
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(data)
//             resolve(data)
//             else
//             reject("data is not fetched")
//         }, 1000);
//     })
// }

// function processData(data){
//    console.log(data) 
// } 

// console.log("before");
// fetchData(processData);

// fetchData().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Everytime run")
// })

// async function processData(){
//     try{

//         let data=await fetchData();
//         console.log(data)
//     }catch(data){
//         console.log(data)
//     }
// }
// processData();
// console.log("after");