import React from 'react'
import './ActivityTypeNavigation.css'

const ActivityTypeNavigation = (props) => {
    let showActivity = props.showActivity
    let navigatorItems = props.activityType.activities.map(activity => <li key={activity.id}
                                                                           className={'ActivityTypeNavigation-Item'}>
        <button
            className={`ActivityTypeNavigation-Button ${activity.show ? 'ActivityTypeNavigation-Button_active' : ''}`}
            onClick={() => showActivity(props.activityType.id, activity.id)}
        >
            <img className={'ActivityTypeNavigation-ButtonImage'} src={activity.image} alt={activity.name}/>
            <h4 className={'ActivityTypeNavigation-ButtonName'}>{activity.name}</h4>
        </button>
    </li>);

    return (
        <div className={'ActivityTypeNavigation'}>
            <ul className={'ActivityTypeNavigation-List'}>
                {navigatorItems}
            </ul>
        </div>
    )
}

export default ActivityTypeNavigation;