import React, { Component } from "react";
import { getCity } from "../../utils/calls";
import Loader from "../loading/Loading";
import ResultView from "../result/ResultView";
import SearchView from "../search/SearchView";

export default class Structure extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            dataDisplayed: false,
            error: "",
            data: null
        };
    }

    launchSearch = async (zipCode) => {
        const numberZipCode = parseInt(zipCode);
        if(numberZipCode < 10000 || numberZipCode > 100000 || Number.isNaN(numberZipCode)){
            this.setState({error: "Veuillez entrer une valeur entre 10000 et 100000"});
        } else {
            this.setState({error: "", isLoading: true});
            await getCity(numberZipCode)
            .then(res => res.json())
            .then(data => this.setState({data: data, isLoading: false, dataDisplayed: true}))
            .catch(() => this.setState({error: "Erreur à la récupération des données", isLoading: false}))
        }
    }

    render(){
        const { error, isLoading, dataDisplayed, data } = this.state;
        const resultFound = data !== null;
        return (
            <div className="fullscreen gray-background container-flex-center">
                <p className="error-message">{error}</p>
                <SearchView launchSearch={this.launchSearch} isLoading={isLoading} error={error !== ""} dataDisplayed={dataDisplayed} />
                {isLoading && <Loader/>}
                {resultFound && <ResultView data={data}/>}
            </div>
        );
    }
}