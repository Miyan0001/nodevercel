const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-29c3qt582fn"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Content-Type': 'application/json',
    'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'connect-protocol-version': '1',
    'dnt': '1',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'origin': 'https://gitpod.io',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en-US,en;q=0.9',
    'Cookie': 'gitpod-user=true; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; _gcl_au=1.1.323557889.1729804175; ajs_anonymous_id=65012681-ba40-4a88-b736-e1c078a8f563; _ga=GA1.1.1276349055.1729804177; _ga_VWLSB1WXM5=GS1.1.1729804177.1.0.1729804184.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; __stripe_mid=1bfedbbb-955f-474d-b380-4245dea9b13787f1cb; _gitpod_io_ws_eb40ae0d-1ec1-4290-8213-eb989e0b06a6_owner_=WILNqD8pOUnP8XLr-6hpVFBnOcR_tI8i; GCLB=COP7geLVgcm6UBAD; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA0MTkwMDEsImV4cCI6MTczMTAyMzgwMSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.Va-ZfCNlSXmYC73ANWqxK__9-5yKmGH37FIoUusB5rP2U1bFDPiPP5QFfAelfEYxFqS2u0m5DD8vRuxLIus90wMxN6jqzHZZVEbcHRwlhzbqbwZOwhTZmx2k8dt0aEzKxTOHZTZ1KVKvMqmUDAC4k9bmwosf5hQX758nmcmwTvUJnynBxR7c10N4HhmKTw9oIrkjZ8VYIACg9zWP_8heo9xTD5UEBMbHnMeb4HJnv0QgXGHMLmCW-YAZGs1eiOPaCiswTlPHw_GVioxSV0jrWfxcaYKv5FavQL7zq-pMsunDb5WEc8ODFgCfgz8AxSHyPjEc0W9rh9LH99BK7TN3NJcTAFZZhNUBP1CX-w_ymNszFvrAlhkdSmbCO6nid7IVIM8Bp1ABWLDi7FGFyhtmIHJXzB4QtnnLGBpNVltajhy8ZsBmRpj4_5Wj_cn4bkXQgXJKU5Y980-eSGY8AD8crbJmn7yleiPeT8eXmyZJBHn7zRE8uN3reHX3E4-tmThykEXr7iOUvxXG8f5eOxyOsIY6HFU3c_NI8fBDsUbrr0gAaX7SAFvkHE6AUnKHqoQ5RvKrEZaaWdQVNQH1giS7zQzfbrVPB6IezsvAbKaiUpKQ3F6eIxzrSJzpsFgZy3Be1awxIv8A3igGaH90iI2fY-_PcY8uyQroz3RRjVygs2c'
  },
  data: data
};
app.get('/', async (req, res, next) => {
try {
const response = await axios.request(config)
res.status(200).json(response.data)
  } catch (err) {
  next(err)
  }
});


// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Export the Express app
module.exports = app;