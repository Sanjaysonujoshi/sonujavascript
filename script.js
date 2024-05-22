const search = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weathericon= document.querySelector('.whethericon')

const apikey = "938b3ec6e4a678344efe4e6dce2dc78f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkwether(city) {
    const response = await fetch(apiUrl + city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data = await response.json()
   

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML =Math.round(data.main.temp) +"°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity +"%"
        document.querySelector('.wind').innerHTML =data.wind.speed+ "km/h";
       if(data.weather[0].main == "Clouds"){
           weathericon.src = "./clouds.png"
       } else if (data.weather[0].main == "Clear"){
        weathericon.src ="./clear.png"
    }  else if    (data.weather[0].main == "Rain"){
        weathericon.src ="./rain.png"
    }   else if   (data.weather[0].main == "Drizzle"){
        weathericon.src ="./drizzle.png"
    } else if(data.weather[0].main == "Mist"){
        weathericon.src ="./mist.png";
    }
    document.querySelector(".whether").style.display ="block"
    document.querySelector(".error").style.display ="none";
    }
    
   
}
searchbtn.addEventListener('click',()=>{
    checkwether(search.value);
})