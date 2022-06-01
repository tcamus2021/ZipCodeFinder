import React, { Component } from "react";
import { ZIP_CODE_WITH_NUMBER_LABEL } from "../../utils/wording";
import DetailsPlace from "./DetailsPlace";

export default class ResultView extends Component {
    render(){
        let listOfPlaces = [];
        this.props.data.places.forEach(place => {
            listOfPlaces.push(<DetailsPlace key={place.latitude+'|'+place.longitude} place={place} />);
        })
        return(
            <div className="result-aera">
                <h1>{ZIP_CODE_WITH_NUMBER_LABEL + this.props.data["post code"]}</h1>
                <div className="list-places">
                    {listOfPlaces}
                </div>
            </div>
        );
    }
}