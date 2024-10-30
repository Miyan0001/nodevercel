const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-99bzm8u2im2"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Content-Type': 'application/json',
    'sec-ch-ua-platform': '"Android"',
    'sec-ch-ua': '"Android WebView";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'connect-protocol-version': '1',
    'origin': 'https://gitpod.io',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=1, i',
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_eb7ab13f-a078-4df7-9ef7-5abbb6f5df27_owner_=pNSo9VGcbm3MQ0eWoixxCfm1joNYaBlW; _gitpod_io_ws_bd75874d-0e7c-41dc-a9aa-9f630ce2eb42_owner_=aA2WfdRxFN3N_e42aZPUSbFruxS0H71W; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzAyOTQzNTQsImV4cCI6MTczMDg5OTE1NCwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.Bcjqpew7Tn7MmN3_ZgxK9JHOggvKpUJ3qeDzVkZLQvgVXX4EkQBjfYZdIcrbd3w6Gt-qXJS2Txmk5FqZQG9r-PAwTXPtvEXCT5Umak0f88C12yuaBYEjktV1FDAe1hHK6e37ZYwuMiTQ_SnjUfQTO06O6waDIGoVnG43-G8yQxWljq5RJfDKfuvtFgEDcdUdKkw7hBR4pHEVqSyZzMxWfdINQ-BpEl41zF1m3G1I0kGn8_yMQ9Wfi5jXs7vQGgFe8g5Ds9chHguPRFQ9VMDJ0vCbQEBPDif2OEsuI7jQIV7X0QkvUzBCCSvQ-x1d50ZbjhJAT7l5vOhs--STAqccwxdZpjngkb83DiBzgewp6fAWJp_0av4ga812kg5IAXvD_J_smr11ego9YbQQ2-n-JKiYWtvm0C6uc-qosEhrKpyqUfWqrxfEpht7647_Y3KIhVant9U1Bueo6JYEzrAZnIu4PdDjn3UIM3GsDgrw4kfsEOoDhGkvQ6mNjB_Y157GLZ3Q0TbIDGEofQfTImJFX3kFsn41uvEuHKrHdR_76Fkt7mQDh1GZhNjTRI7kDsrUPQABdi-HynlqSFBGYc7RTdySXS8oTYzYW9bdDmUkbqmra2FFQetdosh5_imc82NyARW4x5pJhjrzu1hPV4YHUoAtNqBdaoBdDlG-mUYim88; _gitpod_io_ws_db04aa0b-2c8d-4303-abec-f3aaf8386c8c_owner_=JXoCh6nHqUdP2aT1c6ElIoL.zPfYurqE'
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