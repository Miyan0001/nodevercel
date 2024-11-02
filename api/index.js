const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-aleeppttomj"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gitpod_io_ws_2edbe971-a021-4b93-9bb0-f197a834f334_owner_=yIt_U4UVmeNON3-AkGNqRT6UGBChkcfJ; _gitpod_io_ws_ad8185be-b1c2-44c8-b262-fa236aac7625_owner_=z7j5nehozwIfClkC4gkty9Y4i7IniExT; _gitpod_io_ws_e994dff1-fc35-4a79-9216-c8e140236fc7_owner_=JNRiOnWFxICuLc4162bydYCN6YZrfJ_M; _gitpod_io_ws_72b527a5-5a4c-4633-a975-64a8e990b853_owner_=fK5vtq9KKJCzhSv3Gc1.yh-q1K9azSBp; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA1MDkxMTgsImV4cCI6MTczMTExMzkxOCwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.b9QON032MfOVmZMKxQdiagJXMHV2LaG3jqOGvrKfyzUM9YEUpRR8-hPEA51NR3pGIXMhHOjWT-DkZOzOTpHaV8YefPFcV4IGeLUGTOc9-5C4WleP3risklEIYLrXsFGe4MmxQlO0WILjcHTHvZk5xK1vAC8ztkFvCpdV6cZCQr8I22NAbrDbgqPaI-s9mWhMia9rXReaqU8Y3zZGCCLr5OYRFFjT-d2T2sxx0HW0FKtv9UCwaWy7XQiEBhvB_EdQo6yvjN4dVnINOkIRqP998S9hE3I69rQZWK5ymqeHxNIqKQofA8qCO72LpiUsFo9idAKTeIa5lkSb5tzv5PXqqayukcdrwU2LjtQMXVkpHovmQ9X1GJQNYqkQndoN2iiRcL66IM96b-gw81z-3lLTAMB6ZQAicpNFXn5Us-EVmv5K0r7HGB3JYGvjj4LKWdM6SWhErSip_cUxb3JT2iEbz-6cdifSL_RwerY259LThElSVOLWSNujtN3BlejPRW667LtB7yEQI8wpZystSpH2iS4mpMJtlM_DO4ajFH8MQnkSUzudV3cv28xS2MmRYMFWva9uIJtWDuagLgz_ahRJc2YCjtaOfDgBw24D7vMMo7cHXL_boNTLIsq9mMRSOcVo0z2bTVKvuD8WzYysp_SgSvk07afiAogvYrNf1PxqSgI; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f'
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