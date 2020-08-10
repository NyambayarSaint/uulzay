import React from 'react';
import Container from '../styled/Container';
import Block from '../styled/Block';
import Text from '../styled/Text';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {MdKeyboardBackspace, MdAccountCircle, MdEmail} from 'react-icons/md'
import {FaKey} from 'react-icons/fa'
import {IoIosRepeat} from 'react-icons/io'
import { TextField, InputAdornment, Button } from '@material-ui/core';

const containerVariants = {
    hidden: {
        opacity:0,
        x:'100vw'
    },
    visible: {
        opacity: 1,
        x:0,
        duration: 2
    }
}

const Signup = () => {
    return (
        <Container rainbow x="center" y="space-between">
            <Block style={{alignSelf:'flex-start'}} pl="15px" pr="15px">
                <Link to="/welcome"><Text white black><MdKeyboardBackspace/></Text></Link>
            </Block>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} exit={{opacity: 0, x: '100vw'}}>
                <Block white p="30px" direction="y">
                    <img style={{height:50, marginBottom:30}} src={require('../assets/images/heart.svg')} />
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><MdEmail/>&nbsp;</InputAdornment>)}} label="E-mail address" fullWidth type="email"/>
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><FaKey/>&nbsp;</InputAdornment>)}} label="Choose a password" fullWidth type="password"/>
                    <TextField style={{marginBottom:15}} InputProps={{startAdornment: (<InputAdornment><IoIosRepeat/>&nbsp;</InputAdornment>)}} label="Repeat your password" fullWidth type="password"/>
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

{/* <AnimatePresence>
    <motion.div initial="hidden" animate="visible" variants={containerVariants} exit={{opacity: 0, x: '100vw'}}>
        <Container rainbow x="center" y="center">
            <Block white>
                <Link to="/welcome"><Text><MdKeyboardBackspace/></Text></Link>
                <Text big bold>Sign Up</Text>
            </Block>
        </Container>
    </motion.div>
</AnimatePresence> */}