import React from 'react';
import './Covid.css';
import axios from 'axios';

class Covid extends React.Component {
    state = {
        data: {}
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary').then(res => {
            let fetchedData = res.data.Global;
            for (let [key, val] of Object.entries(fetchedData)) {
                console.log(fetchedData[key])
                fetchedData[key] = fetchedData[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            this.setState({
                data: fetchedData
            })
        }).catch(err => {
            console.error(err)
        })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h2>New Confirmed: {this.state.data.NewConfirmed}</h2>
                </div>
                <div className="card">
                    <h2>Total Confirmed: {this.state.data.TotalConfirmed}</h2>
                </div>
                <div className="card">
                    <h2>New Deaths: {this.state.data.NewDeaths}</h2>
                </div>
                <div className="card">
                    <h2>Total Deaths: {this.state.data.TotalDeaths}</h2>
                </div>
                <div className="card">
                    <h2>New Recovered: {this.state.data.NewRecovered}</h2>
                </div>
                <div className="card">
                    <h2>Total Recovered: {this.state.data.TotalRecovered}</h2>
                </div>
            </div>
        )
    }
}

export default Covid;