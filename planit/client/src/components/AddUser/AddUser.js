//copy a user from user table(via email) and PUT them in the 'PlanIt members' array
    //api call to aquire user
    //another api call to PUT that user in PlanIt members array
    //need a dropdown or modal to pop up so Admin can input user email
        //needs an input field and a submit button
        //if an email is not in the database, let the user know it's invalid

import React, { Component } from 'react';
import styled from 'styled-components';
import plus from '../../img/plus.png';
import './AddUser.css';


const PlusImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;
`;

class AddUser extends Component {
    state ={

    };

   enterMember= event => {
        event.preventDefault();
        //pop-up with input field for email
        //on submission call fetchUser
        document.getElementById("myDropdown").classList.toggle("show");
    };

    fetchUser = event => {
        event.preventDefault();
        //axios call to User table
            //if user exists add to members array for associated plan(PlanIt table)
                //update associated plans members list with new user
            //else msg, "user does not exist"
            // API.PUT({
            //     email:''
            // })
            //     .then(res => this.PUT())
            //     .catch(err => console.log(err));
        
    };
    render() {
        return (
            // <a>
            //     <PlusImg src={plus} onClick={enterMember} alt='Add a member' />
            // </a>
            <div className="dropdown">
                
                    <PlusImg className="dropbtn" src={plus} onClick={this.enterMember} alt='Add a member' />
                
                <div id="myDropdown" className="dropdown-content">
                    <form>
                        Email:<br />
                        <input></input>
                    </form>
                    <br />
                    <button type='submit' onClick={this.fetchUser}>Add</button>
                </div>
            </div>
        )
    };
   
    
}

export default AddUser;