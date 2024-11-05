const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-1tw5dqmgnly"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_34c36401-21da-482f-b9f8-3a532f1a0fbf_owner_=jjN-1a0AksE6EUW2SLPONk0fA32tq1dT; _gitpod_io_ws_bb5d3bb7-81ac-4f9d-a4f5-fa51f16e782f_owner_=fEWZnSdKaxUyIPo9Peu18tnQ1DIXbZoB; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA3ODEyNjEsImV4cCI6MTczMTM4NjA2MSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.KtGnE0a0naqtaQwAofCvlEpKHGvkkCDbhQ_VuJOMeox7A38ifuuuByrNjBI5-iD2gp4HooMI0znvph3kDqYtWhYYjyccHVG2owAAQZ_MHDNiQSCDSBqaMBjxyj4fCF4p8Km08s-7AZeBtrLRUopbCWU4B65tiLEfgTixueNJVUmc4YHBMym5tVdraEzEjFoOqUKW9BwVbezi287vMDOgxdNavj3bwpuCNuCsjHa0hgtA4c8eBGirpWOwkeSjoA8ie-QE-Bpd9pDzflSpC3KzZ9gZveJpGUnqlPsyOl30NMhei-h9NFv77SN_C2W-OHJUwElR6s-G-0XO1yPlPO_ZqLJQ6VYOtvZmz8SZ8X5BSMk4rfmFjmflZ0Sjo4rJkya5ctXtP7DiYkV9FYsRjbZejrtNfwMhg_YazDBhYRmuNm16PuOrWYCU2ZVlBuCUTQmjSk_zO74CcdTYGe2lFDIH3RvCXwlQj6SQikGWhx3XjprLK1HLgJrl1xNQFPgxPPbCGmXOaXajYK_x7ukXqzBLcBcKDt_CKKUni_l7ggco_iTN9o9eUM1wgyIkWPGoMAaW4Bg2vwiLGHS7X0PwRhFGab3tN0ffD5Wyuxal-yCirGAdX4QcCMlUiYvv3SanbfBdkYq4l0k33OPBznuQUD7_MYUn09LwPWDD6T0TZTkbsMM'
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