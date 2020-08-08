import React from 'react';
import {useSelector} from 'react-redux'
import { Switch, Route } from 'react-router-dom';

const Main = (props) => {
    const postss = useSelector(state => state.posts);
    console.log(postss)
    return (
        <div>
            Main
            <Switch>
                <Route path="/test" component={Test} />
                <Route path="/test2" component={Test2} />
            </Switch>
        </div>
    );
};



export default Main
const Test = () => <p>hehe</p>
const Test2 = () => <p>hehe2</p>
