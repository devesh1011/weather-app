import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

axios.interceptors.request.use(
    (config) => {
        config.params = config.params || {};
        config.params['appid'] = 'c54065aed28c34727e47f52caca55784';
        config.params['units'] = 'metric';
        return config;
    }
);

const weatherData = async (city) => {
    try {
        const response = await axios.get('/weather', {
            params: {
                q: city
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default weatherData;