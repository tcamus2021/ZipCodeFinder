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
        const isNumber = zipCode.match(/^[0-9]+$/) != null;;
        if(zipCode.length !== 5 && !isNumber){
            this.setState({error: "Please enter a value with 5 numbers"});
        } else {
            this.setState({error: "", isLoading: true});
            await getCity(zipCode)
            .then(res => res.json())
            .then(data => { 
                this.setState({data: data, isLoading: false, dataDisplayed: true});
                if(Object.keys(data).length === 0){
                    this.setState({error: "Zip code not found", isLoading: false})
                }
            })
            .catch(() => this.setState({error: "An error occured during the data search", isLoading: false}))
        }
    }

    errorAlert = async (msg) => window.alert(msg);

    render(){
        const { error, isLoading, dataDisplayed, data } = this.state;
        const resultFound = data !== null;
        const isEmptyResult = resultFound ? Object.keys(data).length === 0 : true;
        if(error !== ""){
            this.errorAlert(error);
        }
        return (
            <div className="fullscreen gray-background container-flex-center">
                <SearchView launchSearch={this.launchSearch} isLoading={isLoading} error={error !== ""} dataDisplayed={!isEmptyResult && dataDisplayed} />
                {isLoading && <Loader/>}
                {(resultFound && !isEmptyResult) && <ResultView data={data}/>}
            </div>
        );
    }
}