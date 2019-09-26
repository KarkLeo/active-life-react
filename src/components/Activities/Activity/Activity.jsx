import React from 'react'
import './Activity.css'

const Activity = (props) => {
    return (
        <div className={'Activity'}>
            <div className={'Activity-ImageBox'}>
                <img className={'Activity-Image'} src={props.activeActivity.image} alt={props.activeActivity.name}/>
            </div>
            <div className={'Activity-TextBox'}>
                <h2 className={'Activity-Name'}>{props.activeActivity.name}</h2>
                <p className={'Activity-Description'}>{props.activeActivity.description}</p>

                <div className={'Activity-Prop'}>
                    <p className={'Activity-PropItem'}>Колличество участников: {props.activeActivity.participants}</p>
                    <p className={'Activity-PropItem'}>Сложость: {props.activeActivity.difficulty}</p>
                    <p className={'Activity-PropItem'}>Продолжительность: {props.activeActivity.duration}</p>
                </div>

            </div>


        </div>
    )
}

export default Activity;