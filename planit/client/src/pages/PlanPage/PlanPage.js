import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import './PlanPage.css';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';
import PlanMembers from '../../components/PlanMembers/PlanMembers';

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

class HomePage extends Component {

    render () {

        return (
            <Fragment>
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
                        <PlanMembers />
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