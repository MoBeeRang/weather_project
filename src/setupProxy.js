const { createProxyMiddleware } = require('http-proxy-middleware');
console.log('setupProxy.js 로드됨');
module.exports = function (app) {
    console.log('setupProxy.js 시작');
  app.use(
    '/v1/datalab', // 프록시를 통해 전달할 경로
    createProxyMiddleware({
      target: 'https://openapi.naver.com', // 실제 API 서버
      changeOrigin: true, // CORS 문제 해결
      pathRewrite: {
        '^/v1/datalab': '/v1/datalab', // 경로 재작성
      },
      onProxyReq: (proxyReq) => {
        // 프록시 요청 로그 출력
        console.log('프록시 요청 URL:', proxyReq.path);
        console.log('Host:', proxyReq.getHeader('host'));
      },
      onError: (err, req, res) => {
        // 프록시 에러 로그 출력
        console.error('프록시 에러:', err.message);
        res.status(500).send('프록시 서버에 문제가 발생했습니다.');
      },
    })
  );
};