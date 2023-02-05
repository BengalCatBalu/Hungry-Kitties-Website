import React from 'react';
import PropTypes from 'prop-types';
import ToolsNavigation from './ToolsNavigation';
import { ToastContainer } from 'react-toastify';
import MintNFT from './MintNFT/MintNFT';
import PaySuiText from './PaySui/PaySuiText';
import PaySui from './PaySui/PaySui';
import Objects from './Objects/Objects';
import ToolsHome from './MainPage/Mainpage';
import Github from './Github/Github';
import GenerateNft from './GenerateNft/GenerateNft';
import styled from 'styled-components';
import PhonePage from './PagePhone';
import Navigation from '../Navigation';
import Footer from '../Footer';
import EventSection from './EventHandler/EventSection';

const Main = styled.div`
    @media (max-width: 64em) {
        display: none;

    }
`
const MainPhone = styled.div`
    display: none;
    @media (max-width: 64em) {
        display: flex;
        justify-content: center;
        height: 100vh;
    }
`

function Tools() {
    return (
        <>
            <Main name='tools'>
                <Navigation/>
                <ToolsHome />
                <MintNFT />
                <PaySuiText />
                <ToastContainer autoClose={1000} />
                <PaySui />
                <Objects />
                <GenerateNft />
                {/*<EventSection/>*/}
                <Github />
                <Footer/>
            </Main>
            <MainPhone>
                <PhonePage/>
            </MainPhone>
        </>
    );
}

export default Tools;