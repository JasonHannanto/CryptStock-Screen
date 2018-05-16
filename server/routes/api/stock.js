const request = require('superagent');

module.exports = (app) => {

    app.post('/api/stock/portfolio', function (req, res, next) {
        // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
        //Assuming: look up user => retrieve ticker symbols

        const apiKey = '5AUPVHXGU4BVDRI2'; //TODO: move to backend...
        const tickers = ['INTC','FB','GOOGL','MSFT','ROKU','AMD'];        //Array of tickers to retrieve info on 
        let completed = 0;               //Tracks how many requests have been completed
        const results = [];              //Returns stock information for each ticker

        //Loop through array of tickers
        for(let i=0;i<tickers.length;i+=1){

            //Select Ticker
            const ticker = tickers[i];
            
            //Send GET request for ticker
            request
            .get('https://www.alphavantage.co/query')
            .query({ 'function': 'TIME_SERIES_DAILY' })
            .query({ symbol: ticker })
            .query({ apikey: apiKey })
            .then((response) => {

                completed+=1; //Increment checker
                // console.log('res',res.body);

                results.push(response.body); // Push to our results array
                
                if(completed === tickers.length){
                    //All requests done
                    console.log('Completed');
                    //Return result
                    res.send({
                        success: true,
                        message: 'Ticker info',
                        results: results
                    });
                }
         
            });
        }
    });
};