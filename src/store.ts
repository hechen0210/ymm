import {applyMiddleware, combineReducers, createStore} from "redux";
import reducers from "./reducers";
import {connectRouter, routerMiddleware} from "connected-react-router";
import createSagaMiddleware from "redux-saga"
import effects from "./effects"

const sagaMiddleware = createSagaMiddleware();

const allReducers = (history: any) => combineReducers({
    ...reducers,
    router: connectRouter(history)
})

export default function CreateStore(history: any) {
    const store = createStore(
        allReducers(history),
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
    return Object.assign({}, store, {
        runSaga: () => sagaMiddleware.run(effects)
    })
}