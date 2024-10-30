const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-pnljtol5qe5"
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
    'Cookie': 'gitpod-user=true; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; _gcl_au=1.1.323557889.1729804175; ajs_anonymous_id=65012681-ba40-4a88-b736-e1c078a8f563; _ga=GA1.1.1276349055.1729804177; _ga_VWLSB1WXM5=GS1.1.1729804177.1.0.1729804184.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; __stripe_mid=1bfedbbb-955f-474d-b380-4245dea9b13787f1cb; GCLB=CKrVq_KgvJCWexAD; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzAzMjY3OTgsImV4cCI6MTczMDkzMTU5OCwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.zoqKxrNoNWKBWc7oBoSpn_QmiNVIcMMUqOWxv2w6gdwchHSP6xkz3wlau9Z-h5XgNZRcy1EM2CwEPs_szqagqz0QZ22oFEOfIRFw_1YF3XTAg_HYDa5bQDNqOSLuc4pDEQrkoXdsDGaa3GPnc2LD6NakJT9Klusn0pvh2AtsS8EZh9JnEdwjn2NdJS3Gu12x8RPeUAd1KWaZ_ZwgM1F88T5CF1fH00xW_BnetxYgqT5d1YQk7dk1IOhOrowSm-3idaPFmRSv1apJrlga8UAmG9oh7Z_qrwyhAA32msrUM_F2-iI5wGOYVNBuspAlK_SD4iC2EuSV6JujATkepj7IbjOe8Zg9Xlt_tRizkZeXno-hT_6LxMPcHiO6C8fIR-QtjIB8WXkxMqcuzx4XQv9zhf3lKI36TMV-SbIpJKQbb8JraM7n6MQsoI3nr-4P3dDCVhICp3sFzM7dhWUhZLxVp4eU2xGUG-QwxrWx8b6UU123H3p5HFEpMJ07r5GvPkFBce4ay26ppISTVlbJEkEWEp75XC5TkaXnyCCO2jEWLVKXdWHiHHPmojiVg1PQUDDpornv4WmelF-b3INAxVvplodbgl0p61S-Khv1ss5PmU0-pLvL_iiGzX3zuHUiiIc72gpGSRZEmJKBE_QqhkCyew4qZwhzvitetYKXCrjFnlw'
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