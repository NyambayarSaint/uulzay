import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import {ThemeProvider} from 'styled-components';
import {theme} from './constants';

import ProtectedRoute from './ProtectedRoute'
import Welcome from './screens/Welcome'
import Auth from './screens/Main'
import Error404 from './screens/Error404'
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";

function App() {
    return (
        <Router>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <div className="App">
                    <Switch>
                        <ProtectedRoute path="/" exact component={Auth} />
                        <Route path="/welcome" component={Welcome} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </ThemeProvider>
          </Provider>
        </Router>
    );
}

export default App;
