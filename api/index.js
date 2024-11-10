const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-cy6phc6qah2"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_f00f97b6-63f0-40fb-94d9-3c156743da8f_owner_=djY9pNezAlPtpBFdtrtpJNqfCpIthYbx; _gitpod_io_ws_2e941f2a-8824-4cd4-b918-bbb6c148e383_owner_=LjnyTx9YF.dGOc-6UFE42szKPZlvNiBe; _gitpod_io_ws_e35bd0f6-71ff-4b01-8b8d-1bb4ce37bf80_owner_=ahlfkofKAmr_MToiwh_2HJXwe1Mb.Ax0; _gitpod_io_ws_36c3a898-a4d7-4093-9cfb-898261eae8b6_owner_=xOkhrOqGjSBPdklu6Hb6BATv4aK94XIs; _gitpod_io_ws_719552fc-da1a-46af-bea0-174370091420_owner_=SZ9OeCELOxACJHCLgGnCsJjiyhgeSvy5; _gitpod_io_ws_59ef767c-aef2-49ad-ac8d-3ee5e67e2eb1_owner_=NLPjD0dEiSdK388p2GKsFUely6d6wd1p; _gitpod_io_ws_a8e4fdda-7fe0-4e36-9a1d-966d5675a11e_owner_=7vZvSmWOj73D0wTopCypx2e8PlxChtxS; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzEyMDk2NTEsImV4cCI6MTczMTgxNDQ1MSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.PjzojT1KoPSFCJlIa99FSk35IBgYLVD3eXcoSmvn3lkWIiEBM78QVk7uA8pIlCFRCrHP-dh2Jinc5wtRbN_YOjUn1noNPk-PbrzLx8WzpcdMeAoemYfkPzCZOY6FdWc7yQcH3gmfpf0CxXd7DLyjIHECjBjx5wH1KyeCcMiorpr6NPKihrGs-5yQ9I4fnTsdnxXQtn_a9R_E4MAWCRDxjFOv6tjd0ckdNU2KbqpN6d0mN24wdsNeYXktbwauqWPZAvUesYzLxrl9uakIAbZCBJuTujTM2sFx8J_2ro6iOEerSVXFf6mKpKoLwrtokEyEhC3bbicAcjSYwhxObblV7hDftgIehaCH61p92KZs7zOlRTD-678dDcDTTZ9PsT2e_jJ5qWktuVuN-Cx9iXScuswk0OwSk5mrX19qKxYRSbBUx_d3K4CHfDWPIBY5PDpcSkYaEcVBs3krPpl1glL5Av2dX6PuPtH2tfaOQ906BPGq4v-qimWr63LXDs1g-OBCSgGr0SIIvKi6rQXVBRkl_a99RPqAuifTNyD6xUrzYK4xnB7xVsaUO53-7IEDfaqogJWB-LQP2Ci2N_LE4vHTrgDEA88AQJSZx4oy4ZrjvKTlEpzy83oJuxlXEgas9cD32Rk7XAyEIrjIqvWMdOMK9bce87DL0ex_99gzrAJMdcU'
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