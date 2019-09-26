import React from 'react';

import {Route} from "react-router-dom";
import Event01 from "./Event01/Event01";
import Event02 from "./Event02/Event02";
import Event03 from "./Event03/Event03";
import Event04 from "./Event04/Event04";
import Event05 from "./Event05/Event05";

const ScreenEvents = () => {
    return (
        <div className='Grid__Wrapper'>
                Screen Event
                <Route path='/Event01' component={Event01} />
                <Route path='/Event02' component={Event02} />
                <Route path='/Event03' component={Event03} />
                <Route path='/Event04' component={Event04} />
                <Route path='/Event05' component={Event05} />
            </div>
    )
};

export default ScreenEvents;