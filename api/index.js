const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

let config = {
  method: 'GET',
  url: 'https://fearful-spooky-gravestone-76p4j4w5v7gcwxq5.github.dev',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://github.com/',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=0, i',
    'Cookie': 'cs-workbench-type=codespaces; cs-feature-flags={"developer":true,"detailedActivityMonitor":false,"vscodeAccountSwitching":false,"enableSmbDiagnosticContinuousMonitoring":false,"enableSmbDiagnosticOnAnomalyMonitoring":false,"useEarlyWorkbenchWebClient":true,"useCoiWebClient":false,"remapUserNamespace":false,"removeConnectRetriesWebClient":true,"storageV2ExhaustiveValidation":false,"forcePushShutdownTelemetry":true,"useNewJupyterApi":true,"improvedWarmupContainerReuse":true,"storageV2ComprehensiveDiagnosticsCollection":false,"usingCopilotWorkspaceConfig":true,"copilotWorkspace":true}; codespace.session_v2=djAxEJ+6lmbZA33jhhuMVIc3Ox7JFhjMeyHMRGSPc7Af3a9dRkgFTnALtTc=; cs-auth-attempts=0'
  }
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