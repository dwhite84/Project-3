import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import PlanItLogo from '../../img/PlanItLogo.png';
import axios from 'axios';

// Router- Link

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    font-family: 'Work Sans', sans-serif;
`;

const NavbarLogo = styled.li`
    float: left;
    margin-left: 1.2em;
    margin-top: .75em;
    margin-bottom: .5em;
`;

const NavbarButton = styled.li`
    float: right;
    margin-right: 1.5em;
    margin-top: 1.3em;
    margin-bottom: 1.3em;
`;

// const NavbarItem = styled.li`
//     float: right;
//     margin: auto;
// `;

const LinkItem = styled.a`
    color: #2b6aaf;
    text-decoration: none;
`;


class NavBar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

   render () {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);
    return (
            <header>
                <Nav>
                    <NavbarLogo>
                        <a href='/'>
                        <img src={PlanItLogo} alt='PlanIt Logo' width="55px" height="55px"/>
                        {/* <LinkItem href='/'>PlanIt</LinkItem> */}
                        </a>
                    </NavbarLogo>

                    <NavbarButton>
                        <Button>
                        <LinkItem href='/signup'>Signup</LinkItem>
                        </Button>
                    </NavbarButton>
                    {loggedIn ? (
                            <NavbarButton>
                                <LinkItem href=""  onClick={this.logout}>
                                <span className="text-secondary">logout</span></LinkItem>

                            </NavbarButton>
                        ) : (
                                <NavbarButton className="navbar-section">
                                    <LinkItem href="/login" className="btn">
                                        <span className="text-secondary">login </span>
				                    </LinkItem>
                                    <LinkItem href="/signup" className="btn btn-link">
                                        <span className="text-secondary">sign up </span>
				                    </LinkItem>
                                </NavbarButton>
                            )}

                </Nav>
            </header>
        );
   }
}

export default NavBar;