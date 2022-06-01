import React, { Component } from "react";
import { getCity } from "../../utils/calls";
import { EMPTY_LABEL, ERROR_GENERAL_LABEL, ERROR_INPUT_LABEL, ERROR_NO_ZIP_CODE_LABEL } from "../../utils/wording";
import Loader from "../loading/Loading";
import ResultView from "../result/ResultView";
import SearchView from "../search/SearchView";

export default class Structure extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            dataDisplayed: false,
            error: EMPTY_LABEL,
            data: null
        };
    }

    launchSearch = async (zipCode) => {
        const isNumber = zipCode.match(/^[0-9]+$/) != null;
        if(zipCode.length !== 5 || !isNumber){
            this.setState({error: ERROR_INPUT_LABEL});
        } else {
            this.setState({error: EMPTY_LABEL, isLoading: true});
            await getCity(zipCode)
            .then(res => res.json())
            .then(data => { 
                this.setState({data: data, isLoading: false, dataDisplayed: true});
                if(Object.keys(data).length === 0){
                    this.setState({error: ERROR_NO_ZIP_CODE_LABEL, isLoading: false})
                }
            })
            .catch(() => this.setState({error: ERROR_GENERAL_LABEL, isLoading: false}))
        }
    }

    errorAlert = async (msg) => window.alert(msg);

    render(){
        const { error, isLoading, dataDisplayed, data } = this.state;
        const resultFound = data !== null;
        const isEmptyResult = resultFound ? Object.keys(data).length === 0 : true;
        if(error !== EMPTY_LABEL){
            this.errorAlert(error);
        }
        return (
            <div className="fullscreen gray-background container-flex-center">
                <SearchView launchSearch={this.launchSearch} isLoading={isLoading} error={error !== EMPTY_LABEL} dataDisplayed={!isEmptyResult && dataDisplayed} />
                {isLoading && <Loader/>}
                {(resultFound && !isEmptyResult) && <ResultView data={data}/>}
            </div>
        );
    }
}