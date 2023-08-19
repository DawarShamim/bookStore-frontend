
import axios from 'axios';
// Create an axios instance with default configuration

const AxiosInstance = axios.create({
    baseURL: 'https://enchanting-ruby-nightingale.cyclic.app/',
    timeout: 10000,
});

export default AxiosInstance;
// Example request with custom headers
async function fetchDataWithHeaders() {
    try {
        const response = await AxiosInstance.get('/repos/octocat/hello-world', {
            headers: {
                'Authorization': 'Bearer <your-token-here>',
            },
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}