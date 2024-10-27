const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-ffstpn29uf7"
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
    'x-requested-with': 'mark.via.gp',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=1, i',
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gitpod_hashed_user_id=172092a222c5d6679cc05bc4f22ec36b; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzAwMDU3MjYsImV4cCI6MTczMDYxMDUyNiwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI5YWIzMTNjOC02MThhLTQ2NWMtYTJkZS1lYjYzYzU5NTI4NDEifQ.xA5FuL2uVPDKnopSx1HTJCgLrdWVfV3QILvdYLIFA7k70xgtaLNHR3niFyzQqkJV7xVZFJYE5t83WvQ-8MqqGrLdVjyFXIbmldwxcUnyO3nXXeo1n2PSHFPV-R83ecKEnUQIF7JZbQiKday0vIydFVMQX_9hBkt0dnZ7_wZAid3DDgWdA_1vosQMYSKyStPZCufweG_87ilGNqcw5-7OKxYUc0UZQZkQdisREBMaKP7D8wVQ6efD-R59DhZP1evPah060pRmu1qqTtWK9WqqWifhim5PxbpdtDcJ9kmXusZygt1UahPs7Ci61pof5A3NUdNii75t50PxWNnz7qsnky0DtWxYztBvWzvaomHDZ6Ut_gLKpyJVYzHkxCBdKjKMtns0sNMhzjj4eHJOBr3dnoD5qdIfgyIiqA2H66of-rP1MIqqQUMq98Z8ddwXZa8TdxvXoj5R7mLoRAPMZFab9RD_LmHWoxrVU3hIqm-qE6XxN836YPnzEcALwrRlCDyUbJo0W2UUHRtm0ExKMQ3ODpTSTm9uxSHaUF0iRvC7Q3o_lxYpOEYvyFHtRJK46zjdVYj8xnLSj3K6_s-YEhTqf4cpheE8coOoymTrAAYihTwKSLAjatZNIdvXzZKSu1aIb3g8uUp3hpEDK-VZI30itT3TKuzhplh4A4FKxMgT_Y0; _gitpod_io_ws_3b63e904-ada4-4d73-abe4-a55cf08a1f82_owner_=f_v2_GLJ7etCdMeSe82dWnuuC4xg3Djq'
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