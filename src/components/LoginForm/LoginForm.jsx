import * as Yup from 'yup';
import { Formik, ErrorMessage } from "formik"

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  WrapperForm,
} from "./LoginForm.stuled";;
import { signin } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid Email format')
      .required('Email is required'),
    password: Yup.string(),
    //   .min(6, 'Password must be at least 6 characters long')
    //   .max(16, 'Password can be at most 16 characters long')
    //   .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter')
    //   .required('Password is required'),
  });

  const dispach = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    showPassword: false,
  };

  const  onSubmit =   async (vasues) => {
    dispach(signin({ email: vasues.email, password: vasues.password }));
  }
  return (
    <WrapperForm>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <StyledFormAuth>
        <StyledWrapInputAuth>
          <StyledInputAuth
            type="email"
            name="email"
            placeholder="Email address"
          />
          <StyledLabelAuth></StyledLabelAuth>
          <ErrorMessage name="email">
            {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
          </ErrorMessage>
        </StyledWrapInputAuth>
        <StyledWrapInputAuth>
          <StyledInputAuth
            className="no-bottom-padding"
            name="password"
            placeholder="Password"
            type='password'
          />
          <StyledLabelAuth></StyledLabelAuth>
          <ErrorMessage name="password">
            {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
          </ErrorMessage>
        </StyledWrapInputAuth>
        <StyledWrapAuthBtn>
          <StyledBtnAuthAccent type="submit" >
            Log in
          </StyledBtnAuthAccent>
        </StyledWrapAuthBtn>
      </StyledFormAuth>
    </Formik>
  </WrapperForm>
  );
}

export default LoginForm;
