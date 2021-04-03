import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import {allReducer} from "./reducxTopic/reducer/indux";
import {Provider} from "react-redux";
import {createStore} from "redux";


//store
let store =createStore(allReducer)
// store.subscribe(()=> console.log(store.getState()))

//dispatch
// store.dispatch(increment())




ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>

    ,
  document.getElementById('root')
);
