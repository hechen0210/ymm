import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import CreateStore from "./store";
import {ConnectedRouter} from "connected-react-router";
import {IntlProvider} from 'rsuite';
import language from "./constants/language";

const history = require("history").createBrowserHistory()

const store = CreateStore(history)
store.runSaga()

ReactDOM.render((
    <IntlProvider locale={language}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <App/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    </IntlProvider>

), document.getElementById('root'));

serviceWorker.register()
