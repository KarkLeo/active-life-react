import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import ScreenHead from "./components/ScreenHead/ScreenHead";
import ScreenAbout from "./components/ScreenAbout/ScreenAbout";
import ScreenEvents from "./components/ScreenEvents/ScreenEvents";
import AdminPage from "./components/AdminPage/AdminPage";
import ActivitiesContainer from "./components/Activities/ActivitiesContainer";


const MainPage = (props) => {
    return (
        <div className={'MainPage'}>
            <ScreenHead/>
            <ActivitiesContainer/>
            <ScreenAbout/>
            <ScreenEvents/>
        </div>
    )
}

function App(props) {
  return (<div>
          <Route path='/admin' render={() => <AdminPage/>} />
          <Route path='/' exact render={() => <MainPage/>} />
      </div>
  );
}

export default App;
