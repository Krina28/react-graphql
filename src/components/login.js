import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    padding: 5
};

const LOGIN = gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            token
        }
      }
    `;

const Login = ({ email, password }) => {
    console.log('>>LL', email, password)
    const [_submitLogin, { data }] = useMutation(LOGIN,
        {
            update: (proxy, mutationResult) => {
                console.log('>>mutationResult', mutationResult)
            }
        }, {
            variables: { email: 'admin@admin.com', password: 'test@123' },
        });

    return (
        <Box borderRadius={16} {...defaultProps}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('values', values)
                    _submitLogin({ email: values.email, password: values.password });
                    setSubmitting(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="email"
                                            name="email"
                                            label="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                    </Grid>
                                </Grid>
                                {errors.email && touched.email && errors.email}
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="password"
                                            name="password"
                                            label="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                    </Grid>
                                </Grid>
                                {errors.password && touched.password && errors.password}
                                <Button type="submit" variant="outlined" color="primary">Login</Button>
                            </form>
                        </FormControl>
                    )}
            </Formik>
        </Box>
    )
}

export default Login;
