import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants";

import ProtectedRoute from "./ProtectedRoute";
import Welcome from "./screens/Welcome";
import Auth from "./screens/Main";
import Error404 from "./screens/Error404";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";

function App() {

    let [installed, setInstalled] = useState(false);
    let [deferredPrompt, setDeferredPrompt] = useState(undefined)

    useEffect(() => {

        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e)
            // Update UI notify the user they can install the PWA
            setInstalled(true);
          });
    }, []);

    const handler = (e) => {
        console.log(deferredPrompt)
        setInstalled(false);
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        });
    }

    return (
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <div className="App">
                        {installed && <button onClick={handler}>Add to homescreen shit!</button>}
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
