import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {PageHeader} from 'react-bootstrap';

const StockInfo = (props) => {
    const {
        data,
    } = props;

    //META DATA
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const timezone = data['Meta Data']['5. Time Zone'];
    //DATA
    const timeSeries = data['Time Series (Daily)'];

    const rows = [];

    //Key = Date, loop through each date
    for (var key in timeSeries) {
        //Check if property is not inherited from prototype
        if (timeSeries[key]){

            const finData = timeSeries[key];

            //Convert string -> double
            const open = parseFloat(finData['1. open'])
            const high = parseFloat(finData['2. high']);
            const low = parseFloat(finData['3. low']);
            const close = parseFloat(finData['4. close']);
            const volume = parseFloat(finData['5. volume']);

            rows.push({
                date: new Date(key),
                dateLabel: key,
                open,
                high,
                low,
                close,
            });
        }
    }

    const oldestDate = rows[rows.length-1]['dateLabel'];
    rows.sort((a, b) => {
        return a.date - b.date; // this is also valid too
        //return a.date > b.date ? 1 : -1;
    }); 


    console.log('rows', rows);


    return (
        <div className="mainDash">
            <PageHeader className="tickerInfo">
                {ticker}
                <br/>
                <small className="date">{oldestDate} <strong>-</strong> {lastRefreshed}</small>
            </PageHeader>
            <br />
            <LineChart width={500} height={300} data={rows} interval={0}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="dateLabel"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dot={false} dataKey="open" stroke="#8884d8"/>
            <Line type="monotone" dot={false} dataKey="high" stroke="#82ca9d" />
            <Line type="monotone" dot={false} dataKey="low" stroke="#B4045F" />
            <Line type="monotone" dot={false} dataKey="close" stroke="#868A08" />
            </LineChart>
        </div>

        
    );
}

export default StockInfo;