const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-4n62v1g8a3d"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; _gitpod_io_ws_d9e950e4-b294-4d83-a2ea-fd04aa609f7d_owner_=odXw_LMT3zXx8lohBNbMLt1bERG7kTs-; _gitpod_io_ws_7bb4f90f-19fe-4b83-9743-acaab537aca8_owner_=agOWN.q-TXKQC-TCqXfUCQJNv3Q0RIdV; _gitpod_io_ws_05eacb84-fa71-42a3-91b7-8f650a3ceba5_owner_=7loUGmpNmELEBdCADi7K4KGpbc_ZVZxr; _gitpod_io_ws_ef30787d-448a-4cf1-8e97-d2cc72caa403_owner_=MHM72SEaLitsRvc32.LvDNhEn-CQpz6s; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzEzMDQ5ODksImV4cCI6MTczMTkwOTc4OSwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.Su5nr0-0S8Y2mpEYavyWyFIYrrPcklOUNV6XYmVujGjXD3WoYQp3n10YGZaOm77SFAE6zPyMylBGNKvyf-O_ennCcui0iS6OHOTwetymeDg8-g1Fqkdms_5M5TIF8aw8IEDbOl4nHDo0h9sHk-k60A-Gl9nOR_-z00b7pNY8K86yW62rJ4UE1KANV-zcu0zQVd-F300j66MPyzc0TnwAFPlYcM8vQMnlHotlXLAMe7OCh_UicZ9rk-j2VG8qLBvT4ybsDaqam5nx4ni5xrn0EtYHCmytsEzm_yQZKq7B2eNo0TlyT_wBtWqaoNfvpmjowO8aNxl21dx8KLTtEtDXd7nC6uca6StL1Z3rs1iGl-Fy3IF7VADQau46eWbqQOGwmGKrcuobKfmZ4P-wwLPT10ICZ9QuhBr8o4MT8m6uo3IbleNctQjkJadNqJT7lcfIeYCCCN1CKBIZZ44epuL6DXLloYCEFaR8n8X0kxto-RPWQW7os-c5HVLIuUtPhm1O_m1JmQbiEK9wStr-oxkaZYEttZ8E3hNFE_EvF49-Z3QBJZE1qNJiil5Ztf6KavjiOO9uKHMjLRDgM0eGRSsUJh4TPftZ83BdW8iulsF3xGHRg5jeN4Thg3y-413BtDIyz6D8z66u-NjqaHoAHbK7a1siFvqTrbtnd89DAKoEbhE; _gitpod_io_ws_2a313bab-0734-4447-9ed1-cc95816b1d66_owner_=4k7lxcSiQtUZvHXcqcg6LGuGhB_rslNm'
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