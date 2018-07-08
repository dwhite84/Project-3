import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import './PlanPage.css';
import memberImg from '../../img/50x50.png';
import plus from '../../img/plus.png';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';

const TripImgDiv = styled.div`
    position: relative;
`;

const TripImg = styled.img`
    width: 100%;
    height: auto;
    opacity: 0.5%;
`;

const TripTitle = styled.h2`
    color: #ffffff;
    position: absolute;
    left: 1em;
    right: 1em;
    top: 45%;
    text-align: center;
    margin: auto;
    font-family: 'Work Sans', sans-serif;
`;

const TripInfo = styled.p`
    margin-left: 1em;
    margin-right: 1em;
    font-family: 'Roboto', sans-serif;
`;

const MemDiv = styled.div`
    margin: 1em;
`;

const MemImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;
`;

class HomePage extends Component {

    render () {

        return (
            <Fragment>
                {/* this is all placeholder */}
                <div className='InfoPanel' >
                    <TripImgDiv>
                        <TripImg src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Plan image' />
                        <TripTitle>
                            Camping Trip Title
                        </TripTitle>
                    </TripImgDiv>
                    <TripInfo> 
                        <i className="map-marked-alt"></i>
                        Location: 
                    </TripInfo>
                    <TripInfo> 
                        <i className="calendar-alt"></i>
                        Dates:
                    </TripInfo>
                    <TripInfo> 
                        <i className="users"></i>
                        Members: 
                    </TripInfo>
                    <MemDiv>
                        <MemImg src={memberImg} alt='Group member 1' />
                        <MemImg src={memberImg} alt='Group member 2' />
                        <MemImg src={memberImg} alt='Group member 3' />
                        <MemImg src={memberImg} alt='Group member 4' />
                        <MemImg src={plus} alt='Add a member' />
                    </MemDiv>
                </div>
                <div className='VisualPanel'>
                    <div>
                        <Checklists />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;