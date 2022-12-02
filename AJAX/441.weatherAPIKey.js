let myKey = "c5d130b07a5e9d7535b49b00a6c12c8e";
let city = prompt("Please enter your city name:");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function getWeather() {
  let d = await fetch(url);
  let dj = await d.json();
  console.log(dj);
}

getWeather();
