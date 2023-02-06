import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/tools.webm'

const GifContaineer = styled.div`
    width:100%;
    border-radius: 50px;

    video{
        margin-left: 5vw;
        width:90%;
        height:70vh;
        @media (max-width: 64em) {
            width: 100%;
            margin-left: 0;
        }
    }
    @media (max-width: 64em) {
        height: 40vh;
        width: 100%;
        display: flex;
        align-items: center;
    }
`

function GifContainer() {
    return (
        <GifContaineer>
            <video src = {logo} autoPlay muted loop/>
        </GifContaineer>
    );
}

export default GifContainer;