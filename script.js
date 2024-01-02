const locationInput = document.querySelector("#locationInput");
const searchButton = document.querySelector("#searchButton");
const locationArea = document.querySelector("#locationArea");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const apiKey = `2b8f758a9b62f3d4352bc2b51ed353fb`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location)
    } else {
        alert("Please enter a location");
    }

    clearInPut();
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    try {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                locationArea.textContent = data.name;
                temperature.textContent = `${Math.round(data.main.temp)}°C`;
                description.textContent = data.weather[0].description;
            })
    } catch (error) {
        console.log(error);
    }

}

function clearInPut() {
    locationInput.value = "";
}