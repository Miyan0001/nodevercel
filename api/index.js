const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-0qfwskftfyb"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA2MTA4NTUsImV4cCI6MTczMTIxNTY1NSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.M55FUxKBHMNT_rePGmiymrFKI-x0p5IPZVDmlofzwGbRAhsogRxn2AnHSJClXPtoEb0qeLD9NFlhlK7en2mKTYAVFwZd8dJS6RjOwIFFKzJvtWzbuVl_4oCx-neqlUxnDB-v__M1fDIBJOioZVSAsXfR9N9Tnn4cthsEFdlSvGCBlhGkrGfdX3KBE5gCJGss4T2fQ8jNdvNa0zeM-GmEkZQNVwKdpUt-TvPHSppxrpLOvQCTkkP43g6t_kd4o7S0zZDHQ4sZMk2gxINsWn0ZD_uQ2loeTV8amqNP-V_DBxxaFbI5wzgD2NyEVMVn6rfisAcdOClYcO5DPgo8JWT5l0o5O2XahGnFugX-uxDAlynm2-yJACo5f4aqmaz98cQMtN1UpM1netADG9jzSd1yQnboYkvg8fnvjYieQmKMM2UatIGNql-KXRQDc2Fttzo5Ufrcr5OHqAyvEGQgKKoXRb6_EnB-jdH_pigmmzpHaQ7DrRouvrWlgsBW7D6fVvMtzyL_1SR4G0QbuKxLSSoM2D4zIe8jCwMAzl9YgOJe4Tttq0qEUahbOqYYxVRfzqtxTfnba01xRtQVnCf3X5dR_930kRFF9F61qa28Eqvm-etShzVUtoRGTMdjxGjw_-b7eD_LrtGJqf3VH-F4FtX5WhGWSXrLHDFZ2VQSFZJ_U7A; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f'
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