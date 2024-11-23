import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const API_KEY = 'af5c9450332901a263ea750598455f36'

//axios api 사용방법~!
const weatherApi = axios.create({
    baseURL: BASE_URL,
    headers: {
    accept: 'application/json',
    },
    params: {
        appid: API_KEY,
        units: 'metric',
    },
})

export const searchWeather = async (endpoint = 'weather', params = {q:'incheon'}) => {
    //  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //  https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    try {
        const response = await weatherApi.get(`/${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export default weatherApi
