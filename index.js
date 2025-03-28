const apiKey ="a9c29fea8bce3a73f943561d7fdf9bcd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherImg = document.querySelector(".weather_img");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else {
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/Mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

    
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
