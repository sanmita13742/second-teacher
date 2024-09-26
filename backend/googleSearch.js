const axios = require('axios');
const config = require('./config');

async function searchGoogle(query) {
    try {
        const response = await axios.get('https://serpapi.com/search.json', {
            params: {
                q: query,
                api_key: config.SERPAPI_KEY,
                num: 10
            }
        });

        return response.data.organic_results.map(item => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet
        }));
    } catch (err) {
        console.error('Error during search', err);
        return [];
    }
}

module.exports = { searchGoogle };
