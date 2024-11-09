const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-fv3zgh31148"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_c7000216-f79a-47cb-a02e-1ee3915df6d1_owner_=JP44ox6xpKwcjsP5g_p6PkLjDJ0QJY7k; _gitpod_io_ws_e022a846-794d-49d6-a7d8-170d887082b1_owner_=2Q6PnQ13A9Wxt1Edmz6xESI_LAeerjxL; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzExNTM2ODksImV4cCI6MTczMTc1ODQ4OSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.0I9mM7rKQ9rlgEzmXVAtwsig1XThUhX4CKWGkgVoCJfOT07uXczAI1Yr_fSO1ULBa5mcqzn9mwgfUz_SdovKoKvjFZXnardS_Eafem9JSE-WDVkUdjhQ9tKq6fBozIwViXKpXH-s47-ZCHT7YIMx_YQbaywiK4y415K_48gyUjzl2Kb5Uj1q6iYnvLIPvnIWuLWfuJ3INKUbkSYPLkUx4WUDWRM3iQn3V5fo4NY7Y5I3jazSeSpsPQOWJHztzFp0HNhdBmALT_AFEQ4sGAMrJ5qbilfw6tSjY_2E0WAmnWESaZtexkFdjsgArZqIsifCEmP69hks24Tiszg6WAnHDqRoaCYT-3iz2hCf0TG0hQJL21JYyhYoiQX_oori9clhKSfE-bAC1W3aVZeJB-2RzcJQMwFOKpPmNL-rWrz5YnLYD7WTSFlYb5sMywJJOisXbQUMAVu06qs8l1MuDsNCVrpI6Pm4HfaAOaiFNyCUN4Xj9u8Gf2DNph924Lwai_N0ST1ONjZwZP7ba7_I_V7yMhLxkaL1wN32XFfu7ffQ-TIkbHsdKDx1AR6aqVPPuvxAoANJrMXkaKJGEEnrJCemOk8gOgMnYJMNFLx3ltILLSRdDSquHIHoCPOEg1115BHrS0clFTNniV9m76tKoWpCJYKZTHZyghxxHW0H2jEqkis; _gitpod_io_ws_f00f97b6-63f0-40fb-94d9-3c156743da8f_owner_=djY9pNezAlPtpBFdtrtpJNqfCpIthYbx; _gitpod_io_ws_2e941f2a-8824-4cd4-b918-bbb6c148e383_owner_=LjnyTx9YF.dGOc-6UFE42szKPZlvNiBe; _gitpod_io_ws_e35bd0f6-71ff-4b01-8b8d-1bb4ce37bf80_owner_=ahlfkofKAmr_MToiwh_2HJXwe1Mb.Ax0'
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