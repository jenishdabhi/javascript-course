var myPromises=new Promise((resolve,reject)=>{
    let x="Geekforgeeks";
    let y="Geekforgeeks";
    if(x==y){
        resolve()
    }
    else{
        reject()
    }
})

myPromises.then(function(){
    console.log("Yes,you are geek");
}).catch(function(){
    console.log("Some error");
})