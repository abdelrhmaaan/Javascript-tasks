let newsData = [];
async function fetchNews(country,category) {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?
    country=${country}&category=${category}&apiKey=7d41f6799a4047c4a892f58d83b28b2e`);
    let resJson = await res.json();
    newsData = resJson.articles;
    displayNews();
    console.log(newsData);
}

fetchNews('us','business');

function displayNews() {
    let cols = ``
    newsData.forEach(post => {
        cols+=`
        <div class="col-md-4">
            <img class='w-100' src="${post.urlToImage? post.urlToImage:'images/slider-1.jpg'}" alt="NotFoUnd">
            <h4>${post.title}</h4>
            <p>${post.description}</p>
        </div>
        `
    });
    document.querySelector('.row').innerHTML = cols;
}