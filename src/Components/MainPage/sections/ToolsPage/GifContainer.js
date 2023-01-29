import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/tools.mp4'

const GifContaineer = styled.div`
    width:100%;
    border-radius: 50px;

    video{
        margin-left: 5vw;
        width:90%;
        height:70vh;
        border-radius: 50px;
    }
    @media (max-width: 64em) {
        height: 50vh;
        display: flex;
        align-items: center;
    }
`

function GifContainer() {
    return (
        <GifContaineer>
            <video src = {logo} type = "video/mp4" autoPlay muted loop/>
        </GifContaineer>
    );
}

export default GifContainer;