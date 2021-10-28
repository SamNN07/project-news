async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const response  = await fetch(url);
    const data = await response.json();

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

}

async function getSportsNews() {

    const sportsUrl = "https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const sportsResponse  = await fetch(sportsUrl);
    const sportsData = await sportsResponse.json();

    document.getElementById("headline5").textContent = sportsData.articles[0].title;
    document.getElementById("content5").textContent = sportsData.articles[0].description;
    document.getElementById("cardimg5").src = sportsData.articles[0].urlToImage;
    document.getElementById("readmore5").href = sportsData.articles[0].url;

    document.getElementById("headline6").textContent = sportsData.articles[1].title;
    document.getElementById("content6").textContent = sportsData.articles[1].description;
    document.getElementById("cardimg6").src = sportsData.articles[1].urlToImage;
    document.getElementById("readmore6").href = sportsData.articles[1].url;

    document.getElementById("headline7").textContent = sportsData.articles[2].title;
    document.getElementById("content7").textContent = sportsData.articles[2].description;
    document.getElementById("cardimg7").src = sportsData.articles[2].urlToImage;
    document.getElementById("readmore7").href = sportsData.articles[2].url;

    document.getElementById("headline8").textContent = sportsData.articles[3].title;
    document.getElementById("content8").textContent = sportsData.articles[3].description;
    document.getElementById("cardimg8").src = sportsData.articles[3].urlToImage;
    document.getElementById("readmore8").href = sportsData.articles[3].url;

}

async function getInternationalNews(){
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=science&language=en&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const response  = await fetch(url);
    const data = await response.json();

    const url2 = "https://newsapi.org/v2/top-headlines?country=au&category=science&language=en&apiKey=9406be52f3f9495e9aae60ff2b584c40";
    const response2  = await fetch(url2);
    const data2 = await response2.json();

    document.getElementById("headline9").textContent = data.articles[0].title;
    document.getElementById("content9").textContent = data.articles[0].description;
    document.getElementById("cardimg9").src = data.articles[0].urlToImage;
    document.getElementById("readmore9").href = data.articles[0].url;

    document.getElementById("headline10").textContent = data2.articles[0].title;
    document.getElementById("content10").textContent = data2.articles[0].description;
    document.getElementById("cardimg10").src = data2.articles[0].urlToImage;
    document.getElementById("readmore10").href = data2.articles[0].url;

    document.getElementById("headline11").textContent = data.articles[1].title;
    document.getElementById("content11").textContent = data.articles[1].description;
    document.getElementById("cardimg11").src = data.articles[1].urlToImage;
    document.getElementById("readmore11").href = data.articles[1].url;

    document.getElementById("headline12").textContent = data2.articles[1].title;
    document.getElementById("content12").textContent = data2.articles[1].description;
    document.getElementById("cardimg12").src = data2.articles[1].urlToImage;
    document.getElementById("readmore12").href = data2.articles[1].url;
    
}

async function getWeather(){
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=0e1d2de76fdc3ee3edf14bdfc9d5fa29";
    const weatherResponse  = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    document.getElementById("city").textContent = weatherData.name+", India";
    document.getElementById("temp").textContent = Math.trunc(weatherData.main.temp) +"°C";
    document.getElementById("feel").innerHTML = "Feels Like: " +"<strong>"+Math.trunc(weatherData.main.feels_like)+"°C"+"</strong>";
    document.getElementById("mainw").textContent = weatherData.weather[0].main;

    document.getElementById("humid").textContent = "Humidity: "+ weatherData.main.humidity+"%";
    document.getElementById("pressure").textContent = "Pressure: "+ weatherData.main.pressure+"hPa";
    
    
}

getNews();
getSportsNews();
getInternationalNews();
getWeather();

// const backupKey = "6ff0796049644e94b8e578a7666a8bf2";