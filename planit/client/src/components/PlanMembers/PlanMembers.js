import React, { Fragment } from 'react';
import styled from 'styled-components';
import memberImg from '../../img/50x50.png';
import plus from '../../img/plus.png';

const MemImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;
`;

const PlanMembers = () => {

    return (
        <Fragment>
            <MemImg src={memberImg} alt='Group member 1' />
            <MemImg src={memberImg} alt='Group member 2' />
            <MemImg src={memberImg} alt='Group member 3' />
            <MemImg src={memberImg} alt='Group member 4' />
            <MemImg src={plus} alt='Add a member' />
        </Fragment>
    )
}

export default PlanMembers;