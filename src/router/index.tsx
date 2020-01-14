import React from "react";
import Login from "../container/login"
import AuthRouter from "./authRouter"

const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login" exact component={Login}/>
                <AuthRouter/>
            </Switch>
        )
    }
}
