const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-xmv8wa9x75o"
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
    'Cookie': 'GCLB=COa_57b-6Y6N_QEQAw; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; ajs_anonymous_id=a7c78c3a-28e1-47fd-b422-7381ae34008f; skip-signup-wall=true; _gcl_au=1.1.1341546114.1730610395; _ga=GA1.1.390662381.1730610397; _ga_VWLSB1WXM5=GS1.1.1730610396.1.1.1730610840.0.0.0; gitpod_hashed_user_id=3c6fc21592609cbaac5e7d605ff9415f; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzEwMTE2OTYsImV4cCI6MTczMTYxNjQ5NiwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI1YjVkYzk1OS0yMmNjLTRhMWQtODM5NC0yZjkwNGZhZmYwNGUifQ.tnZ3hdjaoez8PhI7Ij2Nqo9cHFEN9a0Jg4Ba-Wv-2A8cY1QuK5G2OCmZJ_-VPygXTzMQ8KYQ6bsDHhknQdJrDcwrBGqjfdpG2ZTfRovXBItD7Pld8jJSMCB10trstNp9v3BA4tKkFk1gJkdl8dVtG-MgAI7vnygGn7lNTpPTZFqeAMqeT5A8e0KVPVz0Jd8Yc6v9pfiJGAa3jnol8O22QkW4GlS2uGmRAm_vpvfwVFDBwroacMXoETcXkEeDsBjRaRCAOqvcYYzV7yN4JYL3xq-a6rrvCti8GDiLdqzx3hjdjXcx1X3UIHU138kdqEN8aKOY-UCkTRC6s4flZ8TawSUTHXsCJXY2XxikBfCyHhr0k90eTMH4zJsRATw-30ZtPmePia94oGIxEo7v5BrkQfcAb1hPZNOZRr0n62quPxIRegSZEM3SFcxqJK-UBrbZM8SCMZ2tAf6oFxP-fmN8R9UYU4Ijgg4wXqo3gAmfF_SlmSXzfmViPadeQSlqlhxKxE6x2bv1UiDZf39luQnDl7b-RjHXTPpQdUCOLLnwcVNNqg1hNHS0WjIf4HwDhkn2CJbblpRicFHWg0m-znLBdI3MjliUhM8aAd9KlySkEOn65_d4qySyLJE7zBKN3LX7a-zz4wnwN83NzaFKXhlR4iv4AtBm5QB6TGhPWVjZGnI'
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