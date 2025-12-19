const API_KEY = "8cf7a694cd9a411f88e104407251912";

async function getweather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );

  if (!response.ok) {
    alert("City not found");
    return;
  }

  const data = await response.json();
  console.log(data);

  // current-upper UI
  document.getElementById("CUL-place").innerHTML =
    data.location.name;

  // 👇 YAHAN TU KHUD DAY / DATE / MONTH LOGIC DALEGA
  // document.getElementById("day").innerHTML = ???

  // current-middle UI
  document.getElementById("temp").innerText =
    Math.round(data.current.temp_c) + "°C";

  document.getElementById("condition").innerText =
    data.current.condition.text;

  document.getElementById("weather-icon").src =
    "https:" + data.current.condition.icon;
}

const input = document.querySelector(".search-box input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getweather(input.value.trim());
  }
});
