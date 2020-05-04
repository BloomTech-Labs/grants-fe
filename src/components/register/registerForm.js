import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
            margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 395,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function RegisterForm(props) {

    const classes = useStyles();

    const [ values, setValues ] = useState({
            firstName: '',
            lastName: '',
            email: '',
            userType: '',
            password: '',
            confirmPassword: '',           

    })

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if(value !== values.password){
            return false;
            console.log(value)
        }
        return true
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });            
        }

    const handleSelectChange = (e) => {
        setValues({
            userType: e.target.value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api url', values)
            .then(res => {
                props.history.push('/')
            })
            .catch(err => {
                console.log(err);
            })
        console.log(values)
    }

    return (
        <div className='register'>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create Your Account
                    </Typography>
                    <ValidatorForm className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                value={values.firstName}
                                validators={['required']}
                                errorMessages={['This field is required']}
                                fullWidth
                                label="First Name"
                                autoFocus
                                onChange={handleChange}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                validators={['required']}
                                errorMessages={['This field is required']}
                                autoComplete="lname"
                                onChange={handleChange}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Email"
                                name="email"
                                value={values.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'email is not valid']}
                                onChange={handleChange}
                            />

                        </Grid>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="user-type">User Type</InputLabel>
                            <Select
                                labelId="user-type"
                                required
                                value={values.userType}
                                onChange={handleSelectChange}
                                label="User Type"
                                // validators={['required']}
                                // errorMessages={['This field is required']}
                            >
                                <MenuItem value="">
                                    <em>Select User Type</em>
                                </MenuItem>
                                <MenuItem value="grantWriter">Grant Writer</MenuItem>
                                <MenuItem value="grantApplicant">Grant Applicant</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                validators={['required']}
                                errorMessages={['This field is required']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={values.confirmPassword}
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['Passwords do not match', 'This field is required']}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign In
                            </Link>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>        
            </Container>           
        </div>

    )
}

