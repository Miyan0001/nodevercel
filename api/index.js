const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-7ppxrx5ku31"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; Infinix X6511B Build/RP1A.201005.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.22 Mobile Safari/537.36',
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_e722eae4-d67f-417d-8fa7-26fa427a0a0a_owner_=Mjn7vzvxLZ3CKPyqDCoqZsPv-Bo7_plX; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzA4OTk5NzAsImV4cCI6MTczMTUwNDc3MCwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.rwJnIWEoN3V8hqdhTiurqor_MyLzM9-TMaeFMbAUG1J6znoNpXZOuzueKF_nE78VawN0zIra7GYbjYXxLpOTwnJITcwUfiLFLb0UDinrT1Ei5RkJaPm7YtzmOJjJz1YSDNTOxSx693CsRslwotdA9Cl__ABlM3ZfYELxkoWmtrVQa9JxlocYK4vKVsh37lRi2MRBB8PwfnviVGLGxjS4THXLT-PFVKvB_tmydOc7Lwyf5CdLtA61S3Qp0q6Hede0jwsnPB9vCXuIcsbcZ9nZh7_2lJr-zzsvwOT80N72DtqlNNMw1DqTGgY7164_CT_0o564dAuc9VMWE2zeD5_IFqaknw_Sspjx_kNWz-bZ6J20jKjK-josf3OrIAq31UmPFKuCaD15Ktxp8GSQkPePDxHOPyadC1RWqu5zScm37U8iBoWAcxPd2XnkkeCUEBI5WXbIKj_7NF-laLb2Mvc687h_2IMPsAOxdBIpkM9sFzr08jOJU3-XJJEW206ARfO_R9JQCv2oVA_P5kygNFuPZNCuEa5I5Oca4JmRkY3sT86U6yqth4wgguFhkJfDjZzBTAjiewl2rgm4cSazMWJ0-f1UqicTKPtjA9UKDp0MOOdvOGSLczmeX-GoTQ0Hs5hbLfYsubqAeBw52m0xa6ouuSnafU-0xW6ius_a0GWEfZ0; _gitpod_io_ws_67c3aec0-0331-4e38-959b-589352ee95c1_owner_=sN32voyQkpN0mdNLAtpTnv09EX_xD9C7'
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