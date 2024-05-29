const apiKey = '1921eb538d619f45b7956e8c8ab8020a'; // Substitua pela sua chave de API da OpenWeatherMap
const city = 'São Leopoldo'; // Altere para a cidade desejada
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;


async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temp = Math.floor(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const isDay = icon.endsWith('d');

        document.getElementById('temperature').textContent = `${temp}°C`;
        document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('weather-icon').className = `wi wi-owm-${data.weather[0].id}`;


        if (isDay) {
            document.getElementById('day-night-icon').className = 'wi wi-day-sunny';
        } else {
            document.getElementById('day-night-icon').className = 'wi wi-night-clear';
        }

    } catch (error) {
        console.error('Erro ao buscar dados meteorológicos:', error);
    }
}

fetchWeather();
setInterval(fetchWeather, 60000); // Atualiza a cada 60 segundos
