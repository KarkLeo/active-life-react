import {connect} from "react-redux";
import Activities from "./Activities";
import {showActivitiesTypeAC, showActivityAC} from "../../redux/activitiesReducer";

let mapSStateToProps = (state) => {
    return {
        activitiesData: state.activitiesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showActivitiesType: (id) => {
            dispatch(showActivitiesTypeAC(id))
        },
        showActivity: (typeId, id) => {
            dispatch(showActivityAC(typeId, id))
        }
    }
}

const ActivitiesContainer = connect(mapSStateToProps, mapDispatchToProps)(Activities);

export default ActivitiesContainer;