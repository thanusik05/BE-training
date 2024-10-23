const p = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        //reject(new Error('message'));
        resolve("resolved");
    },2000);
});

p.then(result =>console.log('result',result))
 .catch(err=> console.log('Error',err.message));