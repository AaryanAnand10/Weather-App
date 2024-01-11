const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '**************************',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
