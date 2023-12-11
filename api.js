/*
there something called api ---> applications programming interface (very imp)
we use apis to connect two different components --> like the backend and frontend 
--> XMLHttpRequest is the way we can send a request to get json data 
there are different methods we send a request with --> GET , POST , PUT , PATCH , DELETE
*/
"use strict"
/// let's try 

var api_key = 'e32817f64325236f95d499562a3ce6f6'
var myHttp = new XMLHttpRequest();
var posts = [];
var postsRow = document.querySelector('.row')

// myHttp.open('GET','https://jsonplaceholder.typicode.com/posts')
myHttp.open('GET',`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`)

myHttp.send();
myHttp.addEventListener('readystatechange',function(){
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        posts = JSON.parse(myHttp.response).results;
        console.log(posts)
        // console.log(typeof(posts))
        displayPosts();
    }
})

function displayPosts() {
    var cols = ``
    posts.forEach(post => {
        cols += `
        <div class="col-md-3">
            <img class='w-100' src="https://image.tmdb.org/t/p/w500/${post.poster_path}" alt="">
            <h3>${post.title}</h3>
            <P>${post.overview}</P>
        </div>
        `
    });
    postsRow.innerHTML = cols;
}

/**
 * arrow function let fun = () => {
 *   return anything 
 * }
        what is the benefit of using arrow function 
        ====> important in some cases because it doesnt' create its own this and use
        the default this of the current scope 
 */


// function scop() {
//     x = 2;
// }
// scop();           global scope 
// console.log(x)

let Person = {
    name : 'abdo',
    age : 22,
    gender : 'Male',
    // name : 'abdo',
}

let personMap = new Map(Object.entries(Person))

// uses with the object iterable ???
personMap.forEach(element => {
    console.log(element)
});

let arr = [1,2,3,1,2,3,1,2,3]

console.log(arr)

let uniqueArr = new Set(arr)
console.log(uniqueArr)

uniqueArr.forEach(element => {
    console.log(element)
});

/// oop --> simulate reality this is supported by most of the programming languages

// js --> supports prototype oop ! ---> it is a bit different from the class based oop

Person = {
    name : 'abd',
    age : 22,
}


let Employee = {
    salary: 6000,
    shif : 8,
}
console.log(Person) /// has prototype object default == Object  

let Engineer = {
    is_superier:true,
}
// Employee.__prototype__ = Person
Object.setPrototypeOf(Employee,Person)
console.log(Employee)
Object.setPrototypeOf(Engineer,Person,Employee)
console.log(Engineer)

// let Employee = {

// }

// let Product = function(name,price)
// {
//     this.name = name
//     this.price = price
// }

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    
    getTax(){
        return this.price*.1;
    }
}

let p1 = new Product('watch',233);

console.log(p1.getTax())

// sync and async ---> ordering in executing the programming script 
// js has sync and async 
// examples of using async ==> apis(network,connection,time),events(based on some event ??,time??)
// ---> setinterval (time ??) 
