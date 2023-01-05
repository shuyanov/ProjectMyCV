import React from "react";
import "./Header.scss";

import propTyps from 'prop-types'

const Header = ({onClick}) => {
    return(
        <header className='Header'>
            <div className="ui-container">
                <div className="Header_content">
                <span className="Header_logo">Cv builder</span>
                <button class="ui-button isLink" onClick = {onClick}>
                    Print
                </button>
                </div>
            </div>
        </header>
    );
};

Header.propTyps = {
    onClick: propTyps.func,
}

Header.defaultProps = {
    isSquare: false,
    onClick: () => {},
}

export default Header;