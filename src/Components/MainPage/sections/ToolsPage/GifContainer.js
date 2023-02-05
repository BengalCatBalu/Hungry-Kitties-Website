import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/tools.png'

const GifContaineer = styled.div`
    width:100%;
    border-radius: 50px;

    img{
        margin-left: 5vw;
        width:100%;
        height:auto;
        border-radius: 50px;
        @media (max-width: 64em) {
        margin-left: 0vw;
        border-radius: 0px;
    }
    }
    @media (max-width: 64em) {
        margin-left: 0vw;
        border-radius: 0px;
        height: 50vh;
        display: flex;
        align-items: center;
    }
`

function GifContainer() {
    return (
        <GifContaineer>
            <img src = {logo}/>
        </GifContaineer>
    );
}

export default GifContainer;