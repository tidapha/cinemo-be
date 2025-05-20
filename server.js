const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // อนุญาต CORS ทุก origin

app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get('https://www.majorcineplex.com/apis/get_movie_avaiable', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
