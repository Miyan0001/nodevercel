const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-mb074pcw61o"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; Infinix X6511B Build/RP1A.201005.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.39 Mobile Safari/537.36',
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzExMTE1MDcsImV4cCI6MTczMTcxNjMwNywiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.tbn8MGCjiYoYx2DBr44Gs0Ksc-rAcErRRUNyN7Xqsts1ybnCP6l85pcyywG-OHQUzpE3Nj7-OtiMacxziod0pGF80rbLhTx3MdkvIpufRAcKh730KaJcudkEc_8r2UfmhOvkcJwIylyXBuSI5Ol86jgXF923gXbDzir5gKMZzMCu3TqnE-_QQalVGF5NTnnrowcpoou-kfU2ItUTuq20jqvMMVqgLQhQp82uij49MnBjwJ_koXpb4f2Jvj8czQ47Nc54m-C1O6L4EBbDRTPOJYhvsKd5mEx4u7jufpqXlHFpDxSW5MUysNwH5oEycDd6Ybf-A_MAYUj5A9BxhuOUEvaIG4uoX7xcNZ8HXBMz_nVcwQ8g02Lp0Ay1YMoriO_5NyfsQoYzXWBKoBoRtb09LHUuU8SknGBsa3d2P4ZsOreoxGXcQs1Vu4Zb3fDj_qYFHqFkpJcAksPErcCjkKKaO3HGnPQ2JxD8ITx4bFuM31sQR8sDJdTFtTny3zF9o594E5BUvyBgkZUyo6UTmZp0KjiciFMAJCkP42r6-aTyOBX3LGx3CRGcyg372c2Z0QN7vWCAH0gHZJxR-8MnvFlnT6DxMhjHmTUXMulLqNfq0Rv0OvX27rfHAXLLyn-yyXqRV_3ZbZ0kbXnBkXf1NHsz9eU7SNE_3tCUYbAzHfk8_x0'
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