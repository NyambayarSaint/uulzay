import React from 'react';
import {useSelector} from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import {motion} from 'framer-motion'
import Block from '../styled/Block';
import Container from '../styled/Container';

const Main = (props) => {
    const postss = useSelector(state => state.posts);
    console.log(postss)
    return (
        <motion.div>
            <Container rainbow x="center" y="center">
            <Switch>
                <Route path="/test" component={Test} />
                <Route path="/test2" component={Test2} />
            </Switch>
            <Block white p="15px">
                <img  src={require('../assets/images/heart.svg')}/>
            </Block>
            </Container>
        </motion.div>
    );
};



export default Main
const Test = () => <p>hehe</p>
const Test2 = () => <p>hehe2</p>
