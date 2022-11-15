import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/Firebase/firebase.utils';

import { SignUpContainer, ButtonsContainer } from './signUpForm.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; //The target will attach all things on the input
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
        </ButtonsContainer>
      </form>
      <span>
        <span>Already have an account? </span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <a
          style={{ color: 'var(--red)', cursor: 'pointer' }}
          onClick={props.onClick}
        >
          {' '}
          Sign-In
        </a>
      </span>
    </SignUpContainer>
  );
};

export default SignUpForm;
