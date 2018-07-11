import React, { Component } from 'react';
import styled from 'styled-components';
import './PlanPage.css';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';
import PlanMembers from '../../components/PlanMembers/PlanMembers';
import location from '../../img/baseline-location_on-24px.svg';
import dates from '../../img/baseline-date_range-24px.svg';
import members from '../../img/outline-group-24px.svg';


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

const TripInfoDiv = styled.div`
    margin-left: 1em;
    margin-right: 1em;
    vertical-align: middle;
`;

const TripInfoImg = styled.img`
    width: 24px;
    height: 24px;
    padding: 4px;
    
`;

const TripInfo = styled.p`
    display: inline-block;
    margin-left: .25em;
    margin-right: .25em;
    font-family: 'Roboto', sans-serif;
`;

const MemDiv = styled.div`
    margin: 1em;
`;

class HomePage extends Component {

    render () {

        return (
            <div className='container clearfix'>
                <div className='InfoPanel' >
                    <TripImgDiv>
                        <TripImg src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Plan image' />
                        <TripTitle> 
                            {/* needs to be replaced with dynamic title */}
                            Camping Trip Title 
                        </TripTitle>
                    </TripImgDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoImg src={location} alt="location icon"/>
                        <TripInfo>Location: </TripInfo>
                    </TripInfoDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoImg src={dates} alt="location icon"/>
                        <TripInfo>Dates: </TripInfo>
                    </TripInfoDiv>

                    <TripInfoDiv> 
                    {/* needs to be replaced with dynamic location */}
                        <TripInfoImg src={members} alt="location icon"/>
                        <TripInfo>Members: </TripInfo>
                    </TripInfoDiv>
                    <MemDiv>
                        <PlanMembers />
                    </MemDiv>
                </div>
                <div className='VisualPanel'>
                    <div>
                        <Checklists />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;