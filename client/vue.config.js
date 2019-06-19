module.exports = {
    devServer: {
        proxy: {
            "/startTask": {
                target: "http://127.0.0.1:3000",
                timeout: 6000,
                secure: false,
                changeOrigin: true
            }
        }
    }

};
