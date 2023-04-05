let promise = Promise.resolve();
promise.then(()=>{
    console.log("promise completed");
})

console.log("code completed");