const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-dxqejrk0ipb"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_d9e950e4-b294-4d83-a2ea-fd04aa609f7d_owner_=odXw_LMT3zXx8lohBNbMLt1bERG7kTs-; _gitpod_io_ws_7bb4f90f-19fe-4b83-9743-acaab537aca8_owner_=agOWN.q-TXKQC-TCqXfUCQJNv3Q0RIdV; _gitpod_io_ws_05eacb84-fa71-42a3-91b7-8f650a3ceba5_owner_=7loUGmpNmELEBdCADi7K4KGpbc_ZVZxr; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzEzMDEzNzUsImV4cCI6MTczMTkwNjE3NSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.OPatpdXtDionBBKhOpI5xVq7Z8GpbYsf6zZOhypHQFz-v-Tw2fa0FOU1xORTpZukJb8p_H2a7LWeSDDTBC59r79C0TOXK7KL73DoN4pxqII-S6gt_Jn5Tf5yT9iyRzuAp1HsKi2K7EkVp00kvXd4WtbpugkeHLIWcpfmCGkFmyj0yrhE45_Y1yt-lNjS3MtBbAEQeOvVGMSyWc0I4JNqaLhEWC3RdnSiBH_H2_U5cp3BW3jGB3mvRN6AgcDkaRziCmZ5EzrOb_XyPWox-566Rd7K1Qu-6WycMwyKyO1cUg6fbQrKXFe5Xrh3qrOfxhHNMGQu7vCkKbf6GZ1c1oRICIXo4dWRNoCip_2emoqiDp-b3CSIhC15XlYWyAKoRHrYAyygNjlB49Tw5SvkD3Lg5OkUgoX6s1ajoUQ9oqFjVmZOvaY53DnFc2k2rIG-iJCl0Vw7kI7tbeshCO5z8dfusCbWagHOpM9ryfOnRtaPYilhSsgeRkkYASw8W9MjwymoW3leFbid1e7IisMupIBIBnbY7Mmxif4D9o2G6YGR5DHusCwfzNgNsMxwuV-ivj7R4Ol_JfFvEmjtF_JTapX_dnohaGHkCjHQs-usO7Gzj5FUGnd5eymvdSRnZ_bC0yRTFBOgNE--lZFFOq3h-VS4oODddudQK9tnlgmj7bdNBYw'
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