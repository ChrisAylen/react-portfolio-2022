import React from "react";
import './styles.scss';

const PageFooterContent = (props) => {
    const { footerText, icon } = props;

    return(
        <div className="wrapper">
            <h5>{footerText}</h5>
            <span>{icon}</span>

        </div>
    )
}

export default PageFooterContent;