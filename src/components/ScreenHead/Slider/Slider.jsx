import React from 'react';
import Slider__Content from "./__Content/Slider__Content";
import './Slider.css';
import {connect} from "react-redux";


const SliderComp = (props) => {
    let sliderData = props.sliderData

    let SlideElement = sliderData.map((slide) => slide.status ? (
        <Slider__Content key={slide.id} slide={slide}/>) : '')
    let SlideImages = sliderData.map((slide) => slide.status ? (
        <img key={slide.id} src={slide.image} data-id={slide.id}
             className='Slide__Image'/>) : '')

    return (
        <div className='Slider Grid'>
            <div className="Slider-Layout Grid-Layout">
                <div className="Slider-Box ">
                    {SlideElement}
                </div>
            </div>
            {SlideImages}
        </div>
    )
}

let mapSStateToProps = (state) => {
    return {
        sliderData: state.sliderData.slides
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const Slider = connect(mapSStateToProps, mapDispatchToProps)(SliderComp);

export default Slider;