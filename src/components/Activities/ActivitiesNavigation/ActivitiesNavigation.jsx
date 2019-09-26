import React from 'react'
import './ActivitesNavigator.css'

const ActivitiesNavigator = (props) => {

    let showActivitiesType = props.showActivitiesType;
    let navigatorItems = props.activityTypes.map(type => <li key={type.id} className={'ActivitiesNavigator-Item'}>
        <button
            className={`ActivitiesNavigator-Button ${(type.show ? 'ActivitiesNavigator-Button_active' : '')}`}
            onClick={() => {
                showActivitiesType(type.id)
            }}>
            {type.name}
        </button>
    </li>)

    return (
        <div className={'ActivitiesNavigator'}>
            <ul className={'ActivitiesNavigator-List'}>
                {navigatorItems}
            </ul>
        </div>
    )
}

export default ActivitiesNavigator;