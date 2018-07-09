import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ItemDiv = styled.div`
    display: inline-flex;
`;

const LineItem = styled.p`s
    margin-left: 1em;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
`;

const ItemPrice = styled.p`
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
    font-family: 'Roboto', sans-serif;
`;

const HR = styled.hr`
    opacity: 0.9%;
`;

class ChecklistLineItem extends Component {

    render () {
        return (
            <Fragment>
                <ItemDiv>
                    <LineItem>
                        Item #1
                    </LineItem>
                    <ItemPrice>
                        $ XX
                    </ItemPrice>
                </ItemDiv>
                <HR />
                <ItemDiv>
                    <LineItem>
                        Item #2
                    </LineItem>
                    <ItemPrice>
                        $ XX
                    </ItemPrice>
                </ItemDiv>
                <HR />
                <ItemDiv>
                    <LineItem>
                        Item #3
                    </LineItem>
                    <ItemPrice>
                        $ XX
                    </ItemPrice>
                </ItemDiv>
                <HR />
            </Fragment>
        )
    }
        
}

export default ChecklistLineItem;