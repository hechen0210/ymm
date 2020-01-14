import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import CreateStore from "./store";
import {ConnectedRouter} from "connected-react-router";

const history = require("history").createBrowserHistory()

const store = CreateStore(history)
store.runSaga()

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <App/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.register()
