import React, { Component } from "react";
import DetailsPlace from "./DetailsPlace";

export default class ResultView extends Component {
    constructor(props){
        super();
    }

    render(){
        let listOfPlaces = [];
        this.props.data.places.forEach(place => {
            listOfPlaces.push(<DetailsPlace key={place.latitude+'|'+place.longitude} place={place} />);
        })
        return(
            <div className="result-aera">
                <h1>Zip code n°{this.props.data["post code"]}</h1>
                <div className="list-places">
                    {listOfPlaces}
                </div>
            </div>
        );
    }
}