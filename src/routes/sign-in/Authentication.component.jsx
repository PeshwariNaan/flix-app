import { useState } from 'react';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import { InputDiv } from './authentication.styles';

const SignIn = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  const formChangeHandler = () => {
    setHaveAccount(!haveAccount)
    console.log(haveAccount)
  }

  return (
   
      <InputDiv>
      {haveAccount ? 
      <SignInForm onClick={formChangeHandler }/> : 
      <SignUpForm onClick={formChangeHandler }/>}
      </InputDiv>
  
  );
};

export default SignIn;
