import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  'react-redux';
import { smurfReducer as Reducer} from './components/Reducer/smurfReducer';
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';





const store = createStore(Reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
    , document.getElementById("root"));
