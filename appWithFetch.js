const API = 'https://api.coingecko.com/api/v3/coins/list?include_platform=true';
export const getTokens = async () => {
    try {
        const response  = await fetch(API);
        return response.json();
    } catch (error) {
        console.error('Error fetching tokens:', error);
        throw error;
    }
}

getTokens().then(console.log)