const request = require('superagent');

module.exports = (app) => {

    app.post('/api/crypto/portfolio', function (req, res, next) {
    // https://api.coinmarketcap.com/v2/ticker/?limit=10

        //Send GET request for ticker
        request
        .get('https://api.coinmarketcap.com/v2/ticker')
        .query({ limit: 10})
        .then((response) => {
            res.send({
                success: true,
                message: 'Crypto Info',
                results: response,
            });  
        });
    });
};