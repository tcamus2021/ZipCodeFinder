import React, { Component } from "react";

export default class ResultView extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="result-aera">
                <h1>{this.props.data.places[0]["place name"]}</h1>
                <p>Longitude: {this.props.data.places[0]["longitude"]}</p>
                <p>Latitude: {this.props.data.places[0]["latitude"]}</p>
                <p>State: {this.props.data.places[0]["state"]}</p>
                <p>Country: {this.props.data.country}</p>
            </div>
        );
    }
}