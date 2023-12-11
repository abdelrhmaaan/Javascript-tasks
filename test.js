// window.alert('hello,world')
// document.getElementById('bozo').innerHTML= 'Hello JS';

// var userNum = window.prompt('Enter a num:')

// for (; userNum <= 20;userNum++) {
//     if (userNum%2===0) {
//         console.log(userNum)
//     }
// }
// var divs = ''
// for (var i = 0 ;i<20;i++)
// {
//     divs+=`
//     <div class="col-md-4">
//     <div class="card">
//         <div class="card-body">
//             <img src='1.jpg' class='w-100'/>
//             <h5 class="card-title">Item 2</h5>
//             <p class="card-text">Some content for Item 2.</p>
//         </div>
//     </div>
//     </div>
//     `
// }
// document.getElementById('demo').innerHTML = divs;

// `i can write any thing here i want 
// use if with any case 
// just if it was too many equality cases -> use switch


// the diff between == -> compare just values '4'==4 is true
//  and === '4' === 4 is false 
//  null == notdefined -> true
//  NaN == Nan -> false 
// `

(function (){
    console.log('anonymous function -> self-invoked');
})();

(function(){
    console.log('new function ->self-invoked');
})();

(function(){
    return 2;
})();

var h1 = document.querySelector('.title').innerHTML;
console.log(h1)

var inputName = document.getElementById('name')

function welcome(){
    var uservalue = inputName.value
    console.log(uservalue)
    var userName = document.querySelector('.name')
    userName.innerHTML = uservalue
}

product = {name:'watch 1',onSale:false,}

var window = {
    name:'window'
}

var ayh7ga = {name:'name'}

console.log(window.name)
console.log(ayh7ga.name)
// window.alert('hello')
var arr = [22,'ahemd','engineer',true]
console.log(arr)

var users = document.querySelector('.users')
// get the element from the html 
// create spand add the users inside it
// loop on users and append it to the parrent 

var userList =[
    {name:'ahmed',gender:'male'},
    {name:'yomana',gender:'female'},
    {name:'Essraa',gender:'female'},
];
// Loop through the array of users
userList.forEach(function(user) {
    // Create a <div> element for each user (you can use any other element type as needed)
    var userElement = document.createElement('div');
    
    // Set the content of the user element
    if (user.gender=='male') {
        userElement.textContent ='MR/'+user.name;
    } else {
        userElement.textContent ='MRS/'+user.name;
        
    }
    

    // Append the user element to the <span> element
    users.appendChild(userElement);
});

var arr = ['a','b','c','d']

console.log(arr.slice(0))
