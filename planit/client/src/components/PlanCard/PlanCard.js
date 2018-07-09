import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import placeholder from '../../img/placeholder_200x200.png';

const PlanCardDiv = styled.div`
    float: left;
    text-align: center;
    width: 30%;
    margin: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
`;

const PlanImage = styled.img`
    width: 100%;
    height: auto;
`;   

const PlanTitle = styled.h4`
    margin-left: 1em;
    margin-right: 1 em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

const PlanInfo = styled.p`
    margin-left: 1em;
    margin-right: 1 em;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`;


class PlanCard extends Component {

    render () {

        return (
            <Fragment>
                <PlanCardDiv>
                    <PlanImage src={placeholder} alt='Plan Card' />
                    <PlanTitle>
                        Title
                    </PlanTitle>
                    <PlanInfo>Location: </PlanInfo>
                    <PlanInfo>Dates: </PlanInfo>
                </PlanCardDiv>
                <PlanCardDiv>
                    <PlanImage src={placeholder} alt='Plan Card' />
                    <PlanTitle>
                        Title 
                    </PlanTitle>
                    <PlanInfo>Location: </PlanInfo>
                    <PlanInfo>Dates: </PlanInfo>
                </PlanCardDiv>
                <PlanCardDiv>
                    <PlanImage src={placeholder} alt='Plan Card' />
                    <PlanTitle>
                        Title
                    </PlanTitle>
                    <PlanInfo>Location: </PlanInfo>
                    <PlanInfo>Dates: </PlanInfo>
                </PlanCardDiv>
                <PlanCardDiv>
                    <PlanImage src={placeholder} alt='Plan Card' />
                    <PlanTitle>
                        Title 
                    </PlanTitle>
                    <PlanInfo>Location: </PlanInfo>
                    <PlanInfo>Dates: </PlanInfo>
                </PlanCardDiv>
                <PlanCardDiv>
                    <PlanImage src={placeholder} alt='Plan Card' />
                    <PlanTitle>
                        Title 
                    </PlanTitle>
                    <PlanInfo>Location: </PlanInfo>
                    <PlanInfo>Dates: </PlanInfo>
                </PlanCardDiv>
            </Fragment>
        );
    }

}

export default PlanCard;