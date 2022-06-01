import React, { useState } from "react";
import arrowBottom from "../../assets/arrow_bottom.png";
import arrowTop from "../../assets/arrow_top.png";

const DetailsPlace = ({ place }) => {
    const [isOpen, setIsOpen] = useState(false);
    const imageToUse = isOpen ? arrowTop : arrowBottom;
    const details = isOpen && (
        <div className="details-place-open">
            <div className="details-place-open-row">
                <p><strong>State : </strong></p>
                <p>{place.state}</p>
            </div>
            <div className="details-place-open-row">
                <p><strong>Latitude : </strong></p>
                <p>{place.latitude}</p>
            </div>
            <div className="details-place-open-row">
                <p><strong>Longitude : </strong></p>
                <p>{place.longitude}</p>
            </div>
        </div>
    );
    const detailsClassName = isOpen ? "details-place" : "details-place closed-details";
    return(
        <>
            <div className={detailsClassName} onClick={() => setIsOpen(!isOpen)}>
                <h2>{place["place name"]}</h2>
                <img src={imageToUse} alt={isOpen ? "Close" : "Open"} className="icon-arrow"/>
            </div>
            {details}
        </>
    );
};

export default DetailsPlace;