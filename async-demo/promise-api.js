 

const p1 = new Promise((resolve)=>{
    console.log('promise1');
    setTimeout(()=>{
        console.log('Async operation 1...');
        resolve(1);
    },10000)
    console.log('promise1.2');
});
console.log('btw p1 & p2');
const p2 = new Promise((resolve)=>{
    console.log('promise2');
    setTimeout(()=>{
        console.log('Async operation 2...');
        resolve(2);
    },5000)
    console.log('promise2.2');
})
console.log('btw p2 & p3');
const p3 = new Promise((resolve)=>{
    console.log('promise3');
    setTimeout(()=>{
        console.log('Async operation 3...');
        resolve(3);
    },15000)
    console.log('promise3.2');
})

Promise.all([p1,p2,p3])
.then(result => console.log(result))
.catch(err => console.log('Error',err.message));
