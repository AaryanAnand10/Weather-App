const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York';
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
