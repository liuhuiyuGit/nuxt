module.exports = {
    // 开发环境
    dev: {
        NODE_ENV: 'development',
        BASE_URL: '123' // 开发服务器地址
    },
    // 测试环境
    test: {
        NODE_ENV: 'test',
        BASE_URL: '456' // 测试服务器地址
    },
    // 生产环境
    prd: {
        NODE_ENV: 'production',
        BASE_URL: '789' // 正式服务器地址
    }
}