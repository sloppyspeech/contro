
const  util=require('util');
console.log("Test is ok");

var testFunction= () =>{
    return new Promise ( resolve => {
        setTimeout(() =>{
            resolve('Here in done with TestFunct');
        },2000)
    });
}


var run = async () => {
    var value=await testFunction();
    console.log(value+"1");
    var value=await testFunction();
    console.log(value+"2");
};

run();
