// var weather = {
//     "apiKey": "1cd011beee6c488c0d59a6796ffb835f"
//     fetchWeather : function() {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=Egypt&appid=1cd011beee6c488c0d59a6796ffb835f&units=metric")
//        .then((response) => response.json())
//        .then((data) =>  console.log(data);)
//     }
// }



var weather = {
    "apiKey": "1cd011beee6c488c0d59a6796ffb835f",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
            .then((response) => response.json())
            .then((data) => {
             
                this.displayWeather(data); 
            })
            .catch((error) => console.error('Error fetching weather data:', error));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description , temp, humidity , speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description ; 
        document.querySelector(".temp").innerText = "Temperature: " + temp + "°C"; 
        document.querySelector(".humidty").innerText = "Humidity: " + humidity + "%"; 
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h"; 
    
      

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

// weather.fetchWeather("Cairo");  
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key=="enter") {
        weather.search();
    }
})




// var weather = {
//     "apiKey": "1cd011beee6c488c0d59a6796ffb835f",
//     fetchWeather: function(city) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 this.displayWeather(data); 
//             })
//             .catch((error) => console.error('Error fetching weather data:', error));
//     },
//     displayWeather: function(data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;
//         console.log(name, description , temp, humidity , speed);
//         document.querySelector(".city").innerText = "Wheater in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         // 
//         document.querySelector(".temp").innerText = "Temperature: " + temp + "°C";   
//         document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";   
//         document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";   

//     },
// };

// weather.fetchWeather("Cairo");         




















// var api = "1cd011beee6c488c0d59a6796ffb835f";
// var url = "https://api.openweathermap.org/data/2.5/weather?q=Egypt&appid=1cd011beee6c488c0d59a6796ffb835f&units=metric";
// var fill = document.getElementById('hey')
// var searchBox = document.getElementById("insearch")
// var searchbtn = document.getElementById("btnsearch")
// function getWeather(city) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
            
           
//             var show = `
//             <div class="weather">
//             <img src="img/clear.png" alt="" class="witicon">
//             <h1 class="temp">${data.main.temp} </h1>
//             <h2 class="city"> ${data.name}</h2>
//             <div class="detalis d-flex justify-content-between align-items-center">
                
//                 <div class="cols d-flex align-items-center text-left">
//                     <img src="img/humidity.png" alt="">
//                     <div class="align-items-center">
//                         <p class="rakm humidity">${data.main.humidity +"%"}</p>
//                         <p class="lor">Humidity </p>
//                     </div>
//                 </div>
//                 <div class="cols d-flex align-items-center text-left">
//                     <img src="img/wind.png" alt="">
//                     <div class="">
//                         <p class="rakm">15%</p>
//                         <p class="lor"> ${data.wind.speed + "km/h"} </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             ` ;
//             fill.insertAdjacentHTML("afterbegin", show) ; 
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });
// }
// getWeather();
// searchbtn.addEventListener("click",()=>{
//     getWeather(searchBox.value) })


