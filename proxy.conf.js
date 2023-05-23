const bypassFn = function (req, res, proxyOptions) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET, POST, HEAD, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.send('');
  } else {
    return null;
  }
};

const PROXY_CONFIG = {
  '/portal-api': {
    target: 'http://tkit-portal-server/',
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
