import React from 'react';
import MainMenu from "./MainMenu/MainMenu";
import Slider from "./Slider/Slider";
import Slider__Pagination from "./Slider/__Pagination/Slider__Pagination";
import LogoBox from "./LogoBox/LogoBox";
import MainMenuContainer from "./MainMenu/MainMenuContainer";
import Slider__PaginationContainer from "./Slider/__Pagination/Slider__PaginationContainer";

const ScreenHead = (props) => {
    return (
        <div className='Grid'>
            <div className='Grid-Layout'>
                <LogoBox/>
                <MainMenuContainer/>
                <Slider__PaginationContainer />
            </div>
            <Slider/>
        </div>

    )
};

export default ScreenHead;