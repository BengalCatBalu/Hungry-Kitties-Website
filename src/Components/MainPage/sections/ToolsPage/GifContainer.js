import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/Home Video.mp4'

const GifContaineer = styled.div`
    width:100%;

    video{
        width:100%;
        height:70vh;
        border-radius: 50px;
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