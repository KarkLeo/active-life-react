import React from 'react';
import {NavLink} from "react-router-dom";
import './AdminPage.css'
import {addSlideCreator} from "../../redux/sliderReducer";
import AdminSlideContainer from "./AdminSlide/AdminSlideContainer";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


const Dashboard = (props) => {
    let sliderData = props.sliderData
    let AdminSlides = sliderData.map((slide) => <AdminSlideContainer slide={slide}/>)

    return (
        <div className='Dashboard'>
            <div className='Dashboard-Layout'>
                <div className={'Panel Panel_3of4'}>
                    <h1 className={'Admin-Head'}>Admin page</h1>
                </div>

                <div className={'Panel Panel_1of4'}>
                    <div className={'Admin-BackLink'}>
                        <NavLink to='/'>Home page</NavLink>
                    </div>
                </div>

                {AdminSlides}
                <button className={'AdminSlides-AddButton Panel Panel_1of3'} onClick={props.addSlide}>+</button>

                <div className={'Admin-Slides'}>

                </div>
            </div>
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
        addSlide: () => {
            dispatch(addSlideCreator())
        }
    }
}

const AdminPage = connect(mapSStateToProps, mapDispatchToProps)(Dashboard);

export default AdminPage