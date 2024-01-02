
import axios from 'axios';
const API = 'https://api.coingecko.com/api/v3/coins/list?include_platform=true';

async function fetchTokens(){
try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        console.error('Error fetching tokens:', error);
        throw error;
    }
}

fetchTokens().then(console.log);