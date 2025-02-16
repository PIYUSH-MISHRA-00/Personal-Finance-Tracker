const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5173,
  path: '/',
  method: 'GET',
  headers: {
    'Origin': 'http://example.com'
  }
};

const req = http.request(options, (res) => {
  console.log('CORS headers:');
  console.log('Access-Control-Allow-Origin:', res.headers['access-control-allow-origin']);
  console.log('Access-Control-Allow-Methods:', res.headers['access-control-allow-methods']);
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
