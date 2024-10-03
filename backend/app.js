const express = require('express');
const cors = require('cors');
const { searchGoogle } = require('./googleSearch');

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
    const { topic, format } = req.query;

    let query;
    // Different query formats based on user's selection
    if (format === 'pdf') {
        query = `${topic} filetype:pdf`;
    } else if (format === 'video') {
        query = `${topic} site:youtube.com`;
    } else if (format === 'cheatsheet') {
        query = `${topic} (cheat sheet OR reference card OR summary) (filetype:pdf OR site:cheatography.com OR site:overapi.com OR site:cheatsheets.io)`;
    } else {
        // query = `${topic} tutorial`;
        query = `${topic} (cheat sheet OR reference card OR summary) (filetype:pdf OR site:cheatography.com OR site:overapi.com OR site:cheatsheets.io)`;

    }

    try {
        const results = await searchGoogle(query);
        res.json(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
