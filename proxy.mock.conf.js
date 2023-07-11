const bypassFn = function (req, res, proxyOptions) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET, POST, HEAD, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.send('');
  } else if (req.method === 'GET') {
    if (req._parsedUrl.pathname.endsWith('/entity/search')) {
      let entities = [];
      let totalElements = Math.ceil(30 / req.query.nameFilter.length)
      for (let i = 0; i < Math.min(req.query.pageSize, totalElements); i++) {
        entities.push({ name: req.query.nameFilter + i });
      }

      res.end(JSON.stringify({ totalElements, entities }));
      return true;
    }
  }
  return null;
};

const PROXY_CONFIG = {
  '/portal-api': {
    target: 'http://wiremock/portal-api/',
    secure: false,
    pathRewrite: {
      '^/portal-api': '',
    },
    changeOrigin: true,
    logLevel: 'debug',
    bypass: bypassFn,
  },
  '/api': {
    target: 'http://your-bff-server/',
    secure: false,
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: true,
    logLevel: 'debug',
    bypass: bypassFn,
  },
};

module.exports = PROXY_CONFIG;
