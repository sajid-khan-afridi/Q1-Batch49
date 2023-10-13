function fetchData(){
    return new Promise((resolve, reject)=>{
        let data;

        setTimeout(() => {
            if(data)
            resolve(data)
            else
            reject("data is not fetched")
        }, 1000);
    })
}


// function processData(data){
//     console.log(data)
// }


console.log("before");
// fetchData().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("this will run always")
// })

(async function processData(){
    try{

        let data=await fetchData();
        console.log(data)
    } catch(err){
        console.log(err)
    }
})()
console.log("after");