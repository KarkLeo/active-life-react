import React from 'react';
import './Activities.css'
import ActivitiesNavigator from "./ActivitiesNavigation/ActivitiesNavigation";
import ActivityTypeNavigation from "./ActivityTypeNavigation/ActivityTypeNavigation";
import Activity from "./Activity/Activity";

const Activities = (props) => {

    let showActivitiesType = props.showActivitiesType;
    let showActivity = props.showActivity;
    let activityTypes = props.activitiesData.activityTypes;
    let activityType = props.activitiesData.activityTypes.filter(type => type.show)[0];
    let activeActivity = props.activitiesData.activityTypes.filter(type => type.show)[0].activities.filter(activity => activity.show)[0]

    return (
        <div className={'Activities'}>
            <ActivitiesNavigator activityTypes={activityTypes} showActivitiesType={showActivitiesType}/>
            <ActivityTypeNavigation activityType={activityType} showActivity={showActivity}/>
            <Activity activeActivity={activeActivity}/>
        </div>
    )
}

export default Activities