import React from 'react';

const Slider__Content = (props) => {
    return (
            <div className="Slide__Content">
                <h2 className="Slide__Title">{props.slide.title}</h2>
                <p className='Slide__Text'>{props.slide.text}</p>
                <a className='Slide__Button' href={props.slide.button.path}>{props.slide.button.text}</a>
            </div>
    )
}

export default Slider__Content;