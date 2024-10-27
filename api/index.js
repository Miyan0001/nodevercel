const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let data = JSON.stringify({
  "workspaceId": "miyan0001-miyan-sq21neorq7f"
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
    'Cookie': 'gitpod_hashed_user_id=172092a222c5d6679cc05bc4f22ec36b; gitpod-user=true; gp-necessary=true; gp-analytical=true; gitpod-marketing-website-visited=true; gp-targeting=true; _gcl_au=1.1.323557889.1729804175; ajs_anonymous_id=65012681-ba40-4a88-b736-e1c078a8f563; _ga=GA1.1.1276349055.1729804177; _ga_VWLSB1WXM5=GS1.1.1729804177.1.0.1729804184.0.0.0; _gitpod_io_ws_8846adb4-f951-42d0-8a13-957e712640dd_owner_=SEyJfxyZGE5Gx0UMepaGbqrIcNBoLDus; _gitpod_io_ws_3d787f9a-62b7-4541-bbb9-955f72786c54_owner_=eErdWkWTKxC8Lg778YEjg0o_uJL4aLF9; GCLB=CLenqoKuk9SOFxAD; __Host-_gitpod_io_jwt2_=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjAwMDEifQ.eyJpYXQiOjE3MzAwNjcyNDIsImV4cCI6MTczMDY3MjA0MiwiaXNzIjoiaHR0cHM6Ly9naXRwb2QuaW8iLCJzdWIiOiI5YWIzMTNjOC02MThhLTQ2NWMtYTJkZS1lYjYzYzU5NTI4NDEifQ.km5P6J484BVY3UYcozDU6WxYBAxJ6PcvaWz7793osyam3eiXSJh2LTRdA4K0ZGnTVNZ9_67yBJwTTBezMcyLR_PCB-8-qh_MgarZXTQUCMfmwWQf6oZSoP7qS7OSqrmUUEyTYZNM8mbGYC__i0BXAVHJ8pbaqKcKO2FbYmLPSctSkqK7w9TCje0JJUCOrZuHMRBteAQUemmxEECBpEN7a67OnSfAahbn3ALygXFQz_kx_KWmZfHel9VaACHb6cvqIkXjLWMthJZfjZFNVBDA3Y3KLyrrcodaqmj1OhOkDFKmuRHTjAlJnkNnsvXFvrsfqpXtjU_Xuv8YZ5mvD8a-cIDRX6NhgwykRJbiC-34V8y2mtqAb3iglwzOK5dvdgJt2Ip27QmZDIkrAyxUH9sk4XERF5xjKapsMU-TrDzDt8ljA91RuUnhoqx43IazvOsblIQlib8qa1YqU0W1AYMcM2GerNKGAFn861heTKWpM-SabuIyfW5UdJbZM5wWQfXPJT0q848hED-zZR5ReTz7QZ8A63oMV3kSEgaQyLuSPsYQQ1j_NmdjBd0r_jRM1PzSAJs8Pw3Q6fG32hwSlh8AqrJ-AGC_6z8JIXaiIjKE2X5OzWPYGBRrlxKqF4GSHYBDpCZCYQhaViGR8OcHdJGviT-zigKEAAoAjFyx_Ma_l1A'
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