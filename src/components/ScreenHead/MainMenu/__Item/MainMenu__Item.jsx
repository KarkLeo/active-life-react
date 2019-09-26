import React from 'react';
import {NavLink} from "react-router-dom";

const MainMenu__Item = (proms) => {
    return (
        <li className={`MainMenu-Item`}>
            <NavLink className={'MainMenu-Link'} to={proms.pathLink}>{proms.textLink}</NavLink>
        </li>
    )
}

export default MainMenu__Item;