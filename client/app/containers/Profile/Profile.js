import React, {Component} from 'react';
import StockInfo from '../../components/Profile/StockInfo'

import '../../styles/profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            results: [],
        };

        //Bind to container
        this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
    }
    
    componentWillMount(){
        this.fetchProfileStockInfo();
    }

    fetchProfileStockInfo(){
        console.log('fetchProfileStockInfo');
        fetch('/api/stock/portfolio', { method: 'POST' })
            .then(res => res.json())
            .then(json => {
                //Successful fetch
                if(json.success){
                    this.setState({
                        isLoading: false,
                        results: json.results,
                    });
                } 
                
                //Failed fetch
                else {
                    this.setState({
                        isLoading: false,
                        error: json.message,
                    });
                }
        });  
    }

    render() {
        const {
            error,
            isLoading,
            results,
        } = this.state;
        
        //LOADING
        if(isLoading){
            return(
                <div className="quiver">
                    <span className="arrows st"></span>
                    <span className="arrows nd"></span>
                    <span className="arrows rd"></span>
                    <span className="arrows th"></span>
                    <span className="arrows fth"></span>
                    <span className="loading">Loading</span>
                </div>
                
            );
        }

        //ERROR
        if(error) {
            return (
                <div style={{backgroundColor: '#610B21'}}>
                    <p style={{color: '#fff'}}>
                        {error}
                    </p>
                </div>
                
            )
        }

        return(
            <div>
                <div id="title"> 
                    <p>Portfolio</p>
                </div>
                {
                    results.map(result => <StockInfo data={result}/>)
                }
            </div>
        )
    };
}

export default Profile;