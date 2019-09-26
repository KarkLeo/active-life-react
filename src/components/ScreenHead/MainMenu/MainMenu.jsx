import React from 'react';
import MainMenu__Item from "./__Item/MainMenu__Item";
import {NavLink} from "react-router-dom";
import './MainMenu.css'

const MainMenu = (props) => {
    return (
        <div className={'MainMenu'}>
            <ul className={'MainMenu-List'}>
                {props.menuData.map( link => <MainMenu__Item textLink={link.text} pathLink={link.path} />)}
            </ul>
            <NavLink className={'AdminButton'} to='/admin'>Admin page</NavLink>
        </div>
    )
}

export default MainMenu;