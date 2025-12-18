const API_KEY = "IRSHAD_KEY"

async function getweather(city){
    const  res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${city}`)
);
    
const data = await res.json();

// UI update
  document.getElementById("temp").innerText =
    Math.round(data.current.temp_c) + "°C";
                                                                                                                                                                                                                                            d
  document.getElementById("condition").innerText =
    data.current.condition.text;

  document.getElementById("weather-icon").src =
    "https:" + data.cur rent.condition.icon;


    document.getElementById("temp").innerText =
    Math.round(data.current.temp_c) + "°C";

  document.getElementById("condition").innerText =
    data.current.condition.text;

  document.getElementById("weather-icon").src =
    "https:" + data.current.condition.icon;
}