import React, { Component } from 'react';
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
            <div className='container clearfix'>
                <div className='InfoPanel' >
                    <TripImgDiv>
                        <TripImg src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Plan image' />
                        <TripTitle> 
                            {/* needs to be replaced with dynamic title */}
                            Camping Trip Title 
                        </TripTitle>
                    </TripImgDiv>
                    <TripInfo> 
                    {/* needs to be replaced with dynamic location */}
                        <i className="map-marked-alt"></i>
                        Location: 
                    </TripInfo>
                    <TripInfo> 
                        {/* needs to be replaced with dynamic dates */}
                        <i className="calendar-alt"></i>
                        Dates:
                    </TripInfo>
                    <TripInfo> 
                        {/* needs to be replaced with dynamic plan members */}
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
            </div>
        );
    }
}

export default HomePage;