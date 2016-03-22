var proxyMiddleware = require('http-proxy-middleware');                         // require('http-proxy-middleware');

// configure proxy middleware
// context: '/' will proxy all requests
//     use: '/api' to proxy request when path starts with '/api'
var proxy = proxyMiddleware('/api', {
                target: 'http://localhost:3333',
                changeOrigin: true   // for vhosted sites, changes host header to match to target's host
            });



module.exports = {
  "port": 3000,
 // "files": ["./app/**/**/*.{html,htm,css,js}"],
  server:{
  middleware: [proxy]
  }
//   ,
//    middleware: function (req, res, next) {
//         console.log(req.url);
//         next();
//     }
};
