const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-bghuvjn1pvv"
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
    'sec-ch-ua-mobile': '?0',
    'connect-protocol-version': '1',
    'origin': 'https://gitpod.io',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=1, i',
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_8dc84cf8-48cc-4b3a-9c73-4059c353caf0_owner_=XtcWwWXSftuGSOcIcYxG-IaBZzap3tMV; _gitpod_io_ws_e3154d42-89b1-477e-830b-677b585b434b_owner_=Ma465Ts6_O.-hHeVKwqxA5ebhJGe6hq8; _gitpod_io_ws_8f8ce074-cd4f-4371-bad2-d1c7df4bad67_owner_=bUIU4o1keIHpOKG4UqsCzIj4INLaVuIQ; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA2OTIwMzEsImV4cCI6MTczMTI5NjgzMSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.zYlrgGHVKdYlPtKiwWI09oTNYoMvz3ShhAm6_98PQcQgLA3n1uh9_P1LOBzGbfrzqPn76yCRI5OUJ7H-DumRwUNpp8WqG2Tej2kcSwVBiq3gIm0LfsTR0zF3dBOD0AUVeYQ-ue_8Tp7aY65N4rXe_FIkHAhkt1fg-4B9Wh6T6En9NIheudNvQhfDA6EIKVMPMFIVF-7d_wk7eCYaP5Dbrex3u1L19WqTOA9A0FTBj0zRE2Igd9uKBZ0gUfIA6nu-Xw3OWmucYNewYNhreg2DHm27p2c9lHVF2vre8MaZccYVsqQQOUki2AOnC_Wf96FOmXXiyy88eyyY1z6HopGvNzUsprHYUvR4s8VOypYKjTeBulDPHKg5-CgKtShoTksYlGFnrqjFdAoaYJ41L4ErBUT3ghdqWqrF402Ug9y-8PFvtPIg5mJI2_aLA0SEcFnhz_ptWqOZAEmhapcIQwFIRrmn-Sh4903-fOqsDRb9GIJFEb0Cl2LDWSMy9JAR9wDaRhVsSbXDeSdP08RJjlGNrDGOl3xuAAzA-hhfF1fYKF-WlCq5lSLxtQUCDp4DvnInKQQv0QPIvOk7FdS2hQcZPz9OmG-NEo4U-ksKeoLmIrz7jxpS3BOvZEMRtbUwl7xe11kmUEm5LAtaA9WWBDcRd4oTyXARLyRltPaOwST55GA; _gitpod_io_ws_1a29572c-9035-4441-9c18-4fe8b1de28ab_owner_=p31BTZAZXY7d8Y6nPeAvXBxHfkm7ABUP'
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