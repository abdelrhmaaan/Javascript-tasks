let posts = [];
let Row = document.querySelector('.row');
async function getData() {
    try {
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pasta`);
        let finalResult = await response.json();
        posts = finalResult.recipes;
        console.log(finalResult);
        displayPosts();
    } catch (error) {
        
        console.error('Error fetching data:', error);
    }
}



getData();

function displayPosts() {
    let cols = ``;
    console.log('...')
    posts.forEach(post=> {
        cols+=`
        <div class='col-md-3'>
        <img class='w-100' src='${post.image_url}' />
        <h4>${post.title}</h4>
        <p>${post.publisher} </p>
        </div>
        `;
    });
    Row.innerHTML = cols;
}

