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
        },
        // '/assets': {
        //     target: 'https://c-ssl.duitang.com',
        //     changeOrigin: true,
        //     pathRewrite: {
        //         "^/assets": ""
        //     }
        // }
    }
});

server.bundler.on('buildEnd', () => {
    console.log('Build completed!');
});

server.listen(1234, () => {
    console.log("Parcel proxy server has started: http://127.0.0.1:1234");
});