import React from 'react';
import Container from '../styled/Container';
import Block from '../styled/Block';
import Text from '../styled/Text';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {MdKeyboardBackspace, MdEmail} from 'react-icons/md'
import {FaKey} from 'react-icons/fa'
import {IoIosRepeat} from 'react-icons/io'
import { TextField, InputAdornment, Button, Switch } from '@material-ui/core';

const Signup = () => {
    return (
        <Container rainbow x="center" y="space-between">
            <Block style={{alignSelf:'flex-start'}} pl="15px" pr="15px">
                <Link to="/welcome"><Text style={{fontSize:30}} white black><MdKeyboardBackspace/></Text></Link>
            </Block>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} exit={{opacity: 0, x: '100vw'}}>
                <Block white p="30px" direction="y">
                    <motion.img initial={{y:-25,opacity:0}} animate={{y:0,opacity:1, transition: {delay:0.3}}} alt="Uulzay app" style={{height:50, marginBottom:30}} src={require('../assets/images/heart.svg')} />
                    <motion.p initial={{y:25,opacity:0}} animate={{y:0,opacity:1,transition: {delay: 0.5}}}><Text center mb="30px" light>Шинээр бүртгүүлэх</Text></motion.p>
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><MdEmail style={{opacity:0.7}}/>&nbsp;</InputAdornment>)}} label="И-мэйл хаягаа оруулна уу" type="email"/>
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><FaKey style={{opacity:0.7}}/>&nbsp;</InputAdornment>)}} label="Нууц үг сонгох" type="password"/>
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><IoIosRepeat style={{opacity:0.7}}/>&nbsp;</InputAdornment>)}} label="Нууц үг давтах" type="password"/>
                    <Button variant="contained" style={{marginTop:30}}>Sign up</Button>
                </Block>
            </motion.div>
            <Block>
                <Text light white small>© Copyright 2020.</Text>
            </Block>
        </Container>
    );
};

export default Signup;

const containerVariants = {
    hidden: {
        opacity:0,
        x:'100vw'
    },
    visible: {
        opacity: 1,
        x:0,
        transition: {
            duration:0.4
        }
    }
}