import { useState, useContext } from 'react';
import { UserContext } from '../../store/userContext';
import { Navigate } from 'react-router-dom';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import { FlixIcon, InputDiv } from './authentication.styles';
import Logo from '../../assets/logo.svg'

const Authentication = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const {currentUser} = useContext(UserContext)

  const formChangeHandler = () => {
    setHaveAccount(!haveAccount)
    console.log(haveAccount)
  }

  if(currentUser) {
    return <Navigate exact to={'/home'} replace />
  }else {


    return (
     
        <InputDiv>
        <FlixIcon src={Logo} alt='flix logo' />
        {haveAccount ? 
        <SignInForm onClick={formChangeHandler }/> : 
        <SignUpForm onClick={formChangeHandler }/>}
        </InputDiv>
    
    );
  }

  

};

export default Authentication;
