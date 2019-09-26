import React from 'react';
import './Pagination.css';

const Slider__Pagination = (props) => {
    let pagitationItems = props.sliderData.map((slide, i) => <li key={slide.id}>
        <button onClick={() => props.switchSlide(slide.id)}>{i + 1}</button>
    </li>)
    return (
        <ul className={'Pagination Slider-Pag'}>
            {pagitationItems}
        </ul>
    )
};

export default Slider__Pagination;