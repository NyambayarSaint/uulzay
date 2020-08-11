import React from 'react';
import Container from '../styled/Container';
import Block from '../styled/Block';
import Text from '../styled/Text';
import {Button} from '@material-ui/core'
import {AiFillFacebook, AiOutlineKey, AiOutlineUser} from 'react-icons/ai'
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {

    const responseFacebook = (e) => {
        console.log(e,'responseFacebook')
    }

    const clickHandler = () => document.querySelector('.kep-login-facebook').click();

    return (
        <Container x="center" y="center" rainbow>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} exit={{opacity: 0, x: '100vw'}}>
                <Block direction="y" p="15px">
                    <motion.img initial={{y:-25,opacity:0}} animate={{y:0,opacity:1, transition:{delay:0.5}}} alt="Uulzay app" style={{width:'50%',marginLeft:'25%', padding:20,boxSizing:'border-box',borderRadius:'100%',background:'white'}} src={require('../assets/images/heart.svg')} />
                    <motion.p initial={{y:25,opacity:0}} animate={{y:0,opacity:1, transition:{delay:0.7}}}><Text light white align="center" mt="15px">Уулзаад шаалцья?</Text></motion.p>
                </Block>
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <Block mt="45px" direction="y">
                    <Button style={{marginBottom:15}} variant="contained">
                        <AiOutlineUser fontSize={20}/> &nbsp; <Link to="/signin"><Text black>Нэвтрэх</Text></Link>
                    </Button>
                    <Button style={{marginBottom:5}} variant="contained">
                        <AiOutlineKey fontSize={20}/> &nbsp; <Link to="/signup"><Text black>Бүртгүүлэх</Text></Link>
                    </Button>
                    <Text white light center small mb="5px">or</Text>
                    <Button variant="contained" color="primary" onClick={clickHandler}>
                        <AiFillFacebook fontSize={20}/> &nbsp; Фэйсбүүк эрхээрээ нэвтрэх
                    </Button>
                </Block>
            </motion.div>
            <Block none>
                <FacebookLogin appId="2600940553456902" autoLoad={false} fields="name,email,picture" callback={responseFacebook}/>
            </Block>
        </Container>
    );
};

export default Welcome;

const containerVariants = {
    hidden: {
        opacity:0,
        x:'-100vw'
    },
    visible: {
        opacity: 1,
        x:0,
        transition: {
            duration:0.4,
        }
    }
}