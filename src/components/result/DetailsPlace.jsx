import React, { useState } from "react";
import arrowBottom from "../../assets/arrow_bottom.png";
import arrowTop from "../../assets/arrow_top.png";
import { ALT_CLOSE_LABEL, ALT_OPEN_LABEL, LATITUDE_LABEL, LONGITUDE_LABEL, STATE_LABEL } from "../../utils/wording";

const DetailsPlace = ({ place }) => {
    const [isOpen, setIsOpen] = useState(false);
    const imageToUse = isOpen ? arrowTop : arrowBottom;
    
    const details = isOpen && (
        <div className="details-place-open details-animation">
            <div className="details-place-open-row">
                <p><strong>{STATE_LABEL}</strong></p>
                <p>{place.state}</p>
            </div>
            <div className="details-place-open-row">
                <p><strong>{LATITUDE_LABEL}</strong></p>
                <p>{place.latitude}</p>
            </div>
            <div className="details-place-open-row">
                <p><strong>{LONGITUDE_LABEL}</strong></p>
                <p>{place.longitude}</p>
            </div>
        </div>
    );

    const detailsClassName = isOpen ? "details-place" : "details-place closed-details";
    return(
        <>
            <div className={detailsClassName} onClick={() => setIsOpen(!isOpen)}>
                <h2>{place["place name"]}</h2>
                <img src={imageToUse} alt={isOpen ? ALT_CLOSE_LABEL : ALT_OPEN_LABEL} className="icon-arrow unselectable"/>
            </div>
            {details}
        </>
    );
};

export default DetailsPlace;