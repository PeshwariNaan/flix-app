import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/Firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './signInForm.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password!!')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email.')
          break
        default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
    <SignInContainer>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
            disabled={true}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
      <span>
        <span>Don't have an account? </span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <a
          style={{ color: 'var(--red)', cursor: 'pointer' }}
          onClick={props.onClick}
        >
          Sign Up
        </a>
      </span>
    </SignInContainer>
    <h4>Sign-in with google is disabled -</h4>
    <h4>To sign-in use:</h4>
    <h4> email: test@test.com </h4>
    <h4> password: 12341234 </h4>
    </>
  );
};

export default SignInForm;
