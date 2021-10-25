console.log("heyyyyyyyyyyyyyyyyyyy");



async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const reponse  = await fetch(url);
    const data = await reponse.json();

    //let first = data.articles[0].title;


    document.getElementById("headline").textContent = data.articles[0].title;
    document.getElementById("content").textContent = data.articles[0].description;


    document.getElementById("headline1").textContent = data.articles[1].title;
    document.getElementById("content1").textContent = data.articles[1].description;

    document.getElementById("headline2").textContent = data.articles[2].title;
    document.getElementById("content2").textContent = data.articles[2].description;

    document.getElementById("headline3").textContent = data.articles[3].title;
    document.getElementById("content3").textContent = data.articles[3].description;
}

getNews();