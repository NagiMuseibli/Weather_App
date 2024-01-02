const locationInput = document.querySelector("#locationInput");
const searchButton = document.querySelector("#searchButton");
const locationArea = document.querySelector("#locationArea");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const apiKey = "2b8f758a9b62f3d4352bc2b51ed353fb";
const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location)
    }
});

function fetchWeather(location) {

}