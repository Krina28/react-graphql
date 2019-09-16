import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <div>
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
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        (false);
                    }, 400); setSubmitting
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <FormControl className={classes.margin}>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField type="email"
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
                                            label="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                    </Grid>
                                </Grid>
                                {errors.password && touched.password && errors.password}
                                <Button type="submit" variant="outlined" color="primary"
                                    className={classes.button} disabled={isSubmitting}>
                                    Login
      </Button>
                            </form>
                        </FormControl>
                    )}
            </Formik>
        </div>
    )
};

export default Login;
