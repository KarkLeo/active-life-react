import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";


const rerenderApp = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderApp(store)
store.subscribe ( () => rerenderApp(store))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
