import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import username from '../img/outline-account_circle-24px.svg';
import password from '../img/outline-visibility-24px.svg';

const FormButton = Button.extend`
	width: 300px;
	margin-top: .5em;
    margin-left: auto;
    margin-right: auto;
`;

const Input = styled.input`
	padding: .5em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 285px;
	margin-top: .5em;
	margin-bottom: .5em;
	margin-left: auto;
	margin-right: auto;
	font-family: 'Roboto', sans-serif;

	&:hover {
		border: 1px solid #2b6aaf;
	}
`;

const PageDiv = styled.div`
	width: 100%;
	height: 605px;
`;

const Header = styled.h4`
	font-family: 'Work Sans', sans-serif;
	text-align: center;
	font-size: 1.5rem;
`;

const FormDiv = styled.div`
	width: 22%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	margin-top: 2em;

`;

const FormInfo = styled.p`
    font-family: 'Roboto', sans-serif;
`;

const FormLink = styled.a`
	text-decoration: none;
    font-weight: bold;
    color: #2b6aaf;

    &:hover {
        text-decoration: underline;
    }
`;


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <PageDiv>
                    <Header>Login</Header>
                    <FormDiv>
                        <form>
                        <div>
                            {/* <div>
                                <label>Username</label>
                            </div> */}
                            <div>
                                <img src={username} alt="Username Icon"/>
                                <Input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            {/* <div>
                                <label>Password: </label>
                            </div> */}
                            <div>
                                <img src={password} alt="Password Icon"/>
                                <Input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div></div>
                            <FormButton
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login
                            </FormButton>
                        </div>
                        </form>
                        <FormInfo>Don't have an account already? <FormLink href="/signup">Sign up here</FormLink>.</FormInfo>
                </FormDiv>
                </PageDiv>
            )
        }
    }
}

export default LoginForm
