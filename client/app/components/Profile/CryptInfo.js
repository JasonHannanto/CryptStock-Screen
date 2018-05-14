import React from 'react';

const CryptInfo = (props) => {
    const {
        data,
    } = props;

    const timestamp = data['metadata']['timestamp'];
    const error = data['metadata']['error'];

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    const timeSeries = data['data'];

    // //Key = Date
    // for (var key in timeSeries) {
    //     //Check if property is not inherited from prototype
    //     if (timeSeries[key]){

    //         const finData = timeSeries[key];

    //         //Convert string -> double

    //         const open = parseFloat(finData['1. open'])
    //         const high = parseFloat(finData['2. high']);
    //         const low = parseFloat(finData['3. low']);
    //         const close = parseFloat(finData['4. close']);
    //         const volume = parseFloat(finData['5. volume']);

    //         rows.push({
    //             date: key,
    //             open,
    //             high,
    //             low,
    //             close,
    //         });
    //     }
    // }


    return (
        <div>
            <p>{timestamp}</p>
            <p>{formattedTime}</p>
            <p>{error}</p>
            <br />
        </div>

        
    );
}

export default CryptInfo;