import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/ToolsAssets/tuz.png'
import balu from './../../../../assets/Tomas.png'



const Item = styled.div`
    width:17vw;
    height: 29vh;
    padding: 0vh 0vw;
    color: #DD6B20;
    margin: 6vh 4vw;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    border: 0px solid ${props => props.theme.text};
    border-radius: 20px;
`
const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: lowercase;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0rem auto;
    font-weight: 400;
`


function Shape() {
    return (
        <Item>
            <Title>
                Text
            </Title>
            <SubText>
                Our team is very coolsdfjsdjkfsdjhfjsdhf
                kjsdhfjksdhjfkhjsdhfjhdskjfh{'\n'}jsd<bv/>hfjhsdfjhsdkhfsdhj{'\n'}ksdfsdf
                <bv/>
            </SubText>
        </Item>
    );
}

export default Shape;