import React, {useEffect} from 'react';
import Container from '../styled/Container';
import Block from '../styled/Block';
import Text from '../styled/Text';
import {Button} from '@material-ui/core'
import {AiFillFacebook, AiOutlineKey} from 'react-icons/ai'
import FacebookLogin from 'react-facebook-login';
import { Link, Switch } from 'react-router-dom';

const Welcome = () => {

    const responseFacebook = (e) => {
        console.log(e,'responseFacebook')
    }

    const clickHandler = () => document.querySelector('.kep-login-facebook').click();

    return (
        <Container x="center" y="center" rainbow>
            <Block direction="y" p="15px">
                <img style={{width:'50%',marginLeft:'25%'}} src={require('../assets/images/locationwhite.svg')} />
                <Text light white align="center" mt="15px">Meeting app</Text>
            </Block>
            <Block mt="30px" direction="y">
                <Button style={{marginBottom:15}} variant="contained">
                    <AiOutlineKey fontSize={20}/> &nbsp; <Link to="/signup"><Text black>Sign up</Text></Link>
                </Button>
                <Button variant="contained" color="primary" onClick={clickHandler}>
                    <AiFillFacebook fontSize={20}/> &nbsp; Sign in using Facebook
                </Button>
            </Block>
            <Block none>
                <FacebookLogin appId="2600940553456902" autoLoad={false} fields="name,email,picture" callback={responseFacebook}/>
            </Block>
        </Container>
    );
};

export default Welcome;