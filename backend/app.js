const express = require('express');
const cors = require('cors');
const { searchGoogle } = require('./googleSearch');

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
    const { topic, format } = req.query;

    let query;
    if (format === 'pdf') {
        query = `${topic} filetype:pdf`;
    } else if (format === 'video') {
        query = `${topic} site:youtube.com`;
    } else {
        query = `${topic} tutorial`;
    }

    const results = await searchGoogle(query);
    res.json(results);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
