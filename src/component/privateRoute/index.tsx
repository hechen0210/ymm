import React from "react";
import {Route, Redirect} from 'react-router'
import {isAuth} from "../../utils/auth";

const PrivateRoute: React.FC<any> = (props) => {
    let {component: Component, ...rest} = props;
    return (
        <Route {...rest} render={(props) => (
            isAuth()
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: 'login',
                    state: {from: props.location}
                }}/>
        )}/>
    );
}
export default PrivateRoute
