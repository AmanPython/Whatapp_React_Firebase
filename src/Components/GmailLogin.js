import { Button } from '@material-ui/core'
import React from 'react'
import {auth,provider} from './firebase'
import logo from '../Components/WhatsApp.png'
import './gmailLogin.css'
import 'firebase/auth';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function GmailLogin() {
    const[{user}, dispatch]= useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error=> alert(error.message));
    };
    return (
        <div className="login">
            <div className="container">
                <img src={logo} alt="whatsapp"/>
                <div className="login__text">
                    <h1>Login to WhatsApp</h1>
                </div>
                <Button type ='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default GmailLogin
