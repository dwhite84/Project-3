import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import PlanItLogo from '../../img/PlanItLogo.png';
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
   
   render () {
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
                        <LinkItem href='/sign-up'>Signup</LinkItem>
                        </Button>
                    </NavbarButton>

                    {/* <NavbarItem>
                        <LinkItem href='/login'>Login</LinkItem>
                    </NavbarItem>
                    
                    <NavbarItem>
                        <LinkItem href='/'>Home</LinkItem>
                    </NavbarItem> */}
                </Nav>
            </header>
        );
   }
}

export default NavBar;