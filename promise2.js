promiseArr.getData("dog", "cat", "horse")
.then((show)=>{
    console.log(show);
    return promiseArr.getBang("dog", "cat", "horse");
}).then((show2)=>{
    console.log(show2);
})
.catch((err)=>{
    console.log(err);
})