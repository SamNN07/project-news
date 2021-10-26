async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const reponse  = await fetch(url);
    const data = await reponse.json();

    document.getElementById("headline1").textContent = data.articles[0].title;
    document.getElementById("content1").textContent = data.articles[0].description;
    document.getElementById("cardimg1").src = data.articles[0].urlToImage;
    document.getElementById("readmore1").href = data.articles[0].url;

    document.getElementById("headline2").textContent = data.articles[1].title;
    document.getElementById("content2").textContent = data.articles[1].description;
    document.getElementById("cardimg2").src = data.articles[1].urlToImage;
    document.getElementById("readmore2").href = data.articles[1].url;

    document.getElementById("headline3").textContent = data.articles[2].title;
    document.getElementById("content3").textContent = data.articles[2].description;
    document.getElementById("cardimg3").src = data.articles[2].urlToImage;
    document.getElementById("readmore3").href = data.articles[2].url;

    document.getElementById("headline4").textContent = data.articles[3].title;
    document.getElementById("content4").textContent = data.articles[3].description;
    document.getElementById("cardimg4").src = data.articles[3].urlToImage;
    document.getElementById("readmore4").href = data.articles[3].url;

    document.getElementById("headline5").textContent = data.articles[4].title;
    document.getElementById("content5").textContent = data.articles[4].description;
    document.getElementById("cardimg5").src = data.articles[4].urlToImage;
    document.getElementById("readmore5").href = data.articles[4].url;

    document.getElementById("headline6").textContent = data.articles[5].title;
    document.getElementById("content6").textContent = data.articles[5].description;
    document.getElementById("cardimg6").src = data.articles[5].urlToImage;
    document.getElementById("readmore6").href = data.articles[5].url;

    document.getElementById("headline7").textContent = data.articles[6].title;
    document.getElementById("content7").textContent = data.articles[6].description;
    document.getElementById("cardimg7").src = data.articles[6].urlToImage;
    document.getElementById("readmore7").href = data.articles[6].url;

    document.getElementById("headline8").textContent = data.articles[7].title;
    document.getElementById("content8").textContent = data.articles[7].description;
    document.getElementById("cardimg8").src = data.articles[7].urlToImage;
    document.getElementById("readmore8").href = data.articles[7].url;
}
getNews();