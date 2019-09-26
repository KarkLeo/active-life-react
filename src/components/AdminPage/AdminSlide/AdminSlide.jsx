import React from 'react';
import './AdminSlide.css'

const AdminSlide = (props) => {

    let slideId = React.createRef();
    let slideTitle = React.createRef();
    let slideText = React.createRef();
    let slideButtonName = React.createRef();
    let slideButtonUrl = React.createRef();
    let slideImage = React.createRef();

    let onSlideChange = () => {
        let slide = {
            id: Number(slideId.current.innerText),
            title: slideTitle.current.value,
            text: slideText.current.value,
            button: {
                text: slideButtonName.current.value,
                path: slideButtonUrl.current.value
            },
            image: slideImage.current.value,
            status: false
        }
        props.onUpdateSlideContent(slide)
    }

    let deleteSlide = () => {
        props.onDeleteSlide(props.slide.id)
    }

    return (
        <div className={'AdminSlide Panel_1of3 Panel'}>
            <button className={'AdminSlides-deleteButton'} onClick={deleteSlide}></button>
            <h3 className={'AdminSlide-Index'}>Slide id: <span ref={slideId}>{props.slide.id}</span></h3>
            <label>
                <h4>Title</h4>
                <input ref={slideTitle} className={'AdminSlide-Input'} type="text" value={props.slide.title} onChange={onSlideChange}/>
            </label>

            <label>
                <h4>Text</h4>
                <textarea ref={slideText} className={'AdminSlide-Textarea'} value={props.slide.text} onChange={onSlideChange}></textarea>
            </label>

            <div className={'AdminSlide-InputCase'}>
                <label>
                    <h4>Button text</h4>
                    <input ref={slideButtonName} className={'AdminSlide-Input'} type="text" value={props.slide.button.text} onChange={onSlideChange}/>
                </label>
                <label>
                    <h4>Button URL</h4>
                    <input ref={slideButtonUrl} className={'AdminSlide-Input'} type="text" value={props.slide.button.path} onChange={onSlideChange}/>
                </label>
            </div>

            <label>
                <h4>Image URL</h4>
                <input ref={slideImage} className={'AdminSlide-Input'} type="text" value={props.slide.image} onChange={onSlideChange}/>
            </label>
        </div>
    )
}

export default AdminSlide;