

var config = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT || '3000',
    apiBaseUrl:process.env.API_URL || 'https://api.github.com',
    environment:process.env.NODE_ENV || 'development'
}

module.exports = config;