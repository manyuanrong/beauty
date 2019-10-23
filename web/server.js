const ParcelProxyServer = require('parcel-proxy-server');

const server = new ParcelProxyServer({
    entryPoint: './src/index.html',
    proxies: {
        '/api': {
            target: 'http://image.baidu.com',
            // target: 'https://www.duitang.com',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }
    }
});

server.bundler.on('buildEnd', () => {
    console.log('Build completed!');
});

server.listen(2345, () => {
    console.log("Parcel proxy server has started");
});