import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/Firebase/firebase.utils';
import { InputDiv, SignMainDiv } from './singIn.styles';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <SignMainDiv>
      <InputDiv>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign-in with Google pop-up</button>
      </InputDiv>
    </SignMainDiv>
  );
};

export default SignIn;
