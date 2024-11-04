const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-kr91zt049u2"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Content-Type': 'application/json',
    'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'connect-protocol-version': '1',
    'dnt': '1',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Android"',
    'origin': 'https://gitpod.io',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en-US,en;q=0.9',
    'Cookie': 'gitpod-user=true; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; _gcl_au=1.1.323557889.1729804175; ajs_anonymous_id=65012681-ba40-4a88-b736-e1c078a8f563; _ga=GA1.1.1276349055.1729804177; _ga_VWLSB1WXM5=GS1.1.1729804177.1.0.1729804184.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; __stripe_mid=1bfedbbb-955f-474d-b380-4245dea9b13787f1cb; GCLB=CKjgg5fg6tjvFRAD; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA3NTMwMTAsImV4cCI6MTczMTM1NzgxMCwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.zrHoUrHeP1f8eDw803ADDaqpNBDVQ3TVVt8hFt2ix_vT891H6U7u8O74iX451G2myJFNjsaJRXSuPKLLSjp3_FKxEK0fVkxUMKMHg7TCg2Np8kLVSL-hnvJMJMNuQgC7Z6SoSiSmLRKZ3_Je70ByfWBeoiXfYYqKVx6dJCOPU2n7nD0ClIspElj_xryYXUFZhsGo-4NnImgSYxFRQ-5OryTlgaPOeTe0CdI6MLTK-a799oelDkmVzvRUvHjUv9YwOxX2v7cCpJbVnxA5TVodEsYZQ8hoG1vWr71BTa9evTxNzpw20etKQ7RJvW-6GEHzIT-se9BGZ02OGXDKUJY1peIIrpH3YR0Ei-epy9JFarNS2J_nV5rPAQp7InB-pHowGJgwOH69LHxRVr46lVqUSoRQ6EiYm2hBOn3tO9vlOLBIo9CAipAjQgX1LMxdIgLnSnGZ_PuE4c5P57P-OCoGCxc-xOV0qSdLzJzEyIEoj-Bb4Zj9EmGji3Vgl8mmW_9gsA4QSIFXdWRYH2A1GUD7hM99GlLwAFq0K6QUvjJzqRNGPJWtguLyHnD3rYntWBEfGvq-pXQE9YZZywnBL27SNuV8Ct4OHp_uehZAzIoTE1eL9uGrZo3tMxHmxgTN3aV11Wf3NZdyDhWbO5gaIo58TVr9R20B9OxYkYDqCP1qyUg; _gitpod_io_ws_d4b6dba0-f1e4-415c-aad9-6eab246a545d_owner_=OCKN8RQM03o_wORM_pV6MmezWEhOd2EY'
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