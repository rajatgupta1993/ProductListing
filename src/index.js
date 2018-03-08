import React from "react";
import {render} from 'react-dom';
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import "./styles/styles.css";
import App from "./app";
import rootSaga from "./sagas/saga";
import homeReducer from "./reducers/homeReducer.js";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    homeReducer: homeReducer,
});
const store = createStore(reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Root extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

render(<Root />, document.getElementById("root"));


