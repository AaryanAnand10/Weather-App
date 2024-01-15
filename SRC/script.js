const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '848480195cmshcaa7c73d5778beap18597ejsn7a0ad6801049',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        
        document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
        document.getElementById('temp').innerHTML = data.temp;
        document.getElementById('feels_like').innerHTML = data.feels_like;
        document.getElementById('humidity').innerHTML = data.humidity;
        document.getElementById('min_temp').innerHTML = data.min_temp;
        document.getElementById('max_temp').innerHTML = data.max_temp;
        document.getElementById('wind_speed').innerHTML = data.wind_speed;
        document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
        document.getElementById('sunrise').innerHTML = data.sunrise;
        document.getElementById('sunset').innerHTML = data.sunset;

        console.log(data); // log the entire response data for further inspection
    } catch (error) {
        console.error(error);
    }
}

fetchData();
