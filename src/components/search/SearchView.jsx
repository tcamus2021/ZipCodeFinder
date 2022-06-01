import React, { useState } from "react";
import { GO_LABEL, ZIP_CODE_LABEL } from "../../utils/wording";

const SearchView = ({ launchSearch, isLoading, error, dataDisplayed }) => {
    const [inputValue, setInputValue] = useState(null);
    const classNameForSearch = isLoading || dataDisplayed ? "container-flex-center search-aera end-loading" : "container-flex-center search-aera";
    const classNameForInput = error ? "margin-cost search-bar input-incorrect" : "margin-cost search-bar";
    return (<div className="fullscreen transparent-background container-flex-center">
        <div className={classNameForSearch}>
            <p className="text-color margin-cost">{ZIP_CODE_LABEL}</p>
            <input type="number" min="10000" max="99999" className={classNameForInput} onChange={(e) => setInputValue(e.target.value)}/>
            <button type="button" className="margin-cost button-search" id="search-button" onClick={() => launchSearch(inputValue)} disabled={isLoading}>{GO_LABEL}</button>
        </div>
    </div>)
};

export default SearchView;