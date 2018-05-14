# Crypt/Stock Screen

MERN Project exploring connecting API endpoints and displaying to the user. Currently still in development, but uploading to maintain version control/progression of project.

## TODO

- Implement realtime crypto ticker w/ websocket
- Implement user ability to search stock ticker and display stock information
- Make it actually look nice...
- Implement user system
- Deploy webapp

## Currently Implemented

- Successful API connection with AlphaVantage/Coinmarketcap (localhost:8080/profile)
- Stock chart display with hardcoded tickers (Future: Based of user's account information)

### Prerequisites

```
Node.js 6+
```

### Installing

```
1) Clone/Pull Directory
2) cd into Directory
3) npm install
```

## Running 

Production mode:
```
npm start
```

Development (Webpack dev server) mode:
```
npm run start:dev
```

Local Access
```
localhost:8080
```


## Built With

Front End:
* [React](https://facebook.github.io/react/)
* [ReactRouter](https://reacttraining.com/react-router/)
Back End:
* [Express](http://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)
Styling:
* [Sass](http://sass-lang.com/)
Compilation
* [Webpack](https://webpack.github.io/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
