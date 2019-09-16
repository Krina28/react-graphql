import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    padding: 5
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: []
        }
    }

    render() {
        console.log(this.state)
        const { formValues: { email, password } } = this.state;
        const LOGIN = gql`
        mutation login($email: String!, password: String!) {
            login(email: $email, password: $password) {
              _id
              token
            }
        }
        `;

        const { loading, error, data } = useQuery(LOGIN, { variables: { email, password } });
        console.log('???login', loading, error, data)

        return (
            <div>
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
                            this.setState({ formValues: values })
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
            </div>
        )
    }
}

export default Login;
