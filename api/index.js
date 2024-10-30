const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-n67e7mcgeju"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzAyNTM5NjYsImV4cCI6MTczMDg1ODc2NiwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.co1OAC0lhwWbiGdCxm8V36fn9hSKduUhvBX0Wg6BjTQRD0NM-XXE6LaDXso88XeOWvWjG2ooe5x3DwXguUZ9S-tOjDJUK3XaqGC7pGre5KgdsQTwchNndWcxpR30HPVvgAhypAnpEm4z4XK2fxPjHkqfatOEgqgRrG4YFz3wmY8aF3i1UzH4TaiuGmliumKzwk_VZbTSiCKyJFOIfP_7eLiBfRLVHlTrhlIVEmUCYdMYWHwUM5AgShHkkyUrnNY5XVkZ080fv2Uh8FWnGouhfViHeGS9ONaQvOquLXBrdIHJUOy2WOkhqF9_NAHNWHX8a9ttYH9pcVdaiqXhK8MExvhRgtLRMXbUA2VnyP_oVGxsmyp5xujdu0ekuMIhVfoEUHOtIvE9T45Coi5nVCOdNZnZz9J7abmf48GiUyR6PUyx_aR05UBe1xPDb0ksJK3not3Y6gDoR028LC7aAOBZ70GXw07f7Jjbev4rT3wV1kEuFMtmxws6b1sMe4iN-4L_4KmBrr3E7M-c_o2WkGhrfezZ_w1Q-M0SR-E6VHvdrISPHy__8mbg3IWoAyOAd1yAtdzBNWjP1UVvwQqkxYzYKNRpqvNIrb291IjMckktI_TQMIgU5nL4Fn271TsG1xnLH4aennHwWd2PoUfXeRmw0sALdd7zlVMUqGmD0x8NXNs; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_eb7ab13f-a078-4df7-9ef7-5abbb6f5df27_owner_=pNSo9VGcbm3MQ0eWoixxCfm1joNYaBlW'
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