import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
  Form,
  Input,
  Validation,
  Button,
  WraperDiv,
  ConteinerInp,
  Erorr,
} from './LoginForm.stuled';
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (vasues) => {
      dispach(signin({ email: vasues.email, password: vasues.password }));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <ConteinerInp>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email address"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={`${
            formik.touched.email && formik.errors.email ? 'is-invalid' : ''
          }`}
        />

        {formik.touched.email && formik.errors.email ? (
          <Erorr>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_2521_1222)">
                <path
                  d="M7.99992 14.6667C4.31792 14.6667 1.33325 11.682 1.33325 8C1.33325 4.318 4.31792 1.33333 7.99992 1.33333C11.6819 1.33333 14.6666 4.318 14.6666 8C14.6666 11.682 11.6819 14.6667 7.99992 14.6667ZM7.33325 10V11.3333H8.66659V10H7.33325ZM7.33325 4.66667V8.66667H8.66659V4.66667H7.33325Z"
                  fill="#D80027"
                />
              </g>
              <defs>
                <clipPath id="clip0_2521_1222">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>{' '}
            <Validation>{formik.errors.email}</Validation>
          </Erorr>
        ) : null}
      </ConteinerInp>
      <WraperDiv>
        <Input
          id="password"
          name="password"
          type={'text'}
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={`${
            formik.touched.password && formik.errors.password
              ? 'is-invalid'
              : ''
          }`}
        />

        {formik.touched.password && formik.errors.password ? (
          <Erorr>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_2521_1222)">
                <path
                  d="M7.99992 14.6667C4.31792 14.6667 1.33325 11.682 1.33325 8C1.33325 4.318 4.31792 1.33333 7.99992 1.33333C11.6819 1.33333 14.6666 4.318 14.6666 8C14.6666 11.682 11.6819 14.6667 7.99992 14.6667ZM7.33325 10V11.3333H8.66659V10H7.33325ZM7.33325 4.66667V8.66667H8.66659V4.66667H7.33325Z"
                  fill="#D80027"
                />
              </g>
              <defs>
                <clipPath id="clip0_2521_1222">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>{' '}
            <Validation>{formik.errors.password}</Validation>
          </Erorr>
        ) : null}
      </WraperDiv>
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default LoginForm;
