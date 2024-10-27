const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-2wcp79n4a17"
});

let config = {
  method: 'POST',
  url: 'https://gitpod.io/public-api/gitpod.v1.WorkspaceService/StartWorkspace',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Content-Type': 'application/json',
    'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'connect-protocol-version': '1',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'origin': 'https://gitpod.io',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://gitpod.io/start/',
    'accept-language': 'en-US,en;q=0.9',
    'Cookie': 'gitpod_hashed_user_id=172092a222c5d6679cc05bc4f22ec36b; gitpod-user=true; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; _gcl_au=1.1.323557889.1729804175; ajs_anonymous_id=65012681-ba40-4a88-b736-e1c078a8f563; _ga=GA1.1.1276349055.1729804177; _ga_VWLSB1WXM5=GS1.1.1729804177.1.0.1729804184.0.0.0; _gitpod_io_ws_78f847d8-359b-4311-9621-06797bdf68bd_owner_=lEMBgAuL2xnYwc-u862WNrFX3ARB0Hul; _gitpod_io_ws_4a8ada8f-dace-4248-84fe-b2be50b480d2_owner_=rFPY0M-6yY-Q_Qo3ZoCgI08TtMQrxOtO; _gitpod_io_ws_1f8530b1-d21a-4b54-bcfa-28780f7d177e_owner_=ajJ-DVUTgNVFKEhGOeCsDPn34h47kMw4; GCLB=CJe23fjZ06urqQEQAw; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3Mjk5NjAxMjIsImV4cCI6MTczMDU2NDkyMiwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI5YWIzMTNjOC02MThhLTQ2NWMtYTJkZS1lYjYzYzU5NTI4NDEifQ.iaQtdhw45Isu6EfS3AP2TPCeGRG1ktrRaq7l7_Vm_JUBdC_SxSd8tBzGUmLrXUwtUymZ3zKWltM1pCGdIhIkiAoXnfxuzpaYR6Ut-3vrw092uVqcsOlCrv-XN77TGIK9lizk-hqZcvVlx1WwMvZjTkgqhyq1SbxoAiAgyPgZBokFXK-aQ027ZjEeB_3vZGroiav5jqwqPOUIbhwKF2r09zUWS2HUlKTjyZoBEqzoDh0sRppctm2jQpRkx2EsfgOFfllTVx47qk14Y22wJedn9e9676lyXkUYHyUSnPuPOaV2TN7KHoN-4wyLaf81SvEjFnIXyHuRvJkOFSdEzFQgfFTFEy5BMLoZDgz_QrbAfreKH2jNyAMsPOLDHM7fKh_vJ46n_Fk6qWfm2Cax7AoN8ij378_iyK8Q19Yq3vtYVZFy6sj5rEqPNElXNfmqst16vp4_XEtkGIZ3KRdY2OEbXMgrMBnMFunwix-TTqdN3ySr7SyT5P3vmBVTKeoArsh9m7Je9Z0hnRtqUtOuTBynZGEh3X7FZR2pMq_8dFWNjml-4xBlnPpxfcLcS_T33JiESVHyfAOFtuEf6d-gCXeKGOOj_GIIiD4wnDlTE31BeSu-RHjhLrcgAMmMVcuLk3X5yLcyAICR_GUmbXKfbpUDCKludjOd2x4OBKDXKPrQljw; _gitpod_io_ws_0b679d31-ce39-4dca-b03d-9032d46966bc_owner_=g68ctobcnyPAzfLPdeE.1uobHesQUroG'
  },
  data: data
};

app.get('/', (req, res) => {
  await axios.request(config)
  res.send("Success.")
});


// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Export the Express app
module.exports = app;