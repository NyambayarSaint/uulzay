import React from 'react';
import {Route, Redirect} from 'react-router-dom';

let authenticated = false

const ProtectedRoute = ({component: Component, ...rest }) => {
    return(
        <Route {...rest} render={props => 
            authenticated ?
            <Component {...props} />
            :
            <Redirect to={{ pathname: "/welcome" }} />
        } />
    )
}
export default ProtectedRoute