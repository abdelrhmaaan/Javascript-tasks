// callback function ! why ?? 
/**
in js if i have multible function that are async 
getData1() // sometimes this will be first excuted 
getData2() // somtiems this will be first excuted 
getData3()// somtimes will be second or last ---> so i done know who is will be the first who will be the second
//! what is the proble ?
if u calling an api for posts some for comments 
so it is not a logic that comments is ahead from its posts ???

sooo !!! ----> callback function is created this concept --> to contorl who will be first who will be last 
 */

function one(callback) {
    console.log('one');
    callback();
}
function two(callback) {
    console.log('two');
    callback();
}

function three(callback) {
    console.log('three');
    callback();

}

function holder() {
    console.log('holder')
}

// three(function(){
//     two(function(){
//         one(function(){
//             holder();
//         })
//     })
// })
///! not clean code not readable not readable 
// one(function(){
//     two(function(){ /// callback hell !!
//         three(function(){
//             holder();
//         })
//     })
// })

function ayh7ga() {
    return new Promise(function(resolve,reject){
        if (a != 0) {
            console.log('promise function ');
            resolve();
        } else {
            reject();
        }
    })
}

let a = 2;
ayh7ga()
    .then(()=> console.log('resolved'))
    .catch(()=>console.log('Error'))

