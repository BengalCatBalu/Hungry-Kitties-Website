import React from 'react';
import { useRef, useState } from "react";
import logo from './../../../../assets/ToolsAssets/dinoFree.png'

import ph1 from './../../../../assets/Shelters/Edinburg/edinburg1.png'
import ph2 from './../../../../assets/Shelters/Edinburg/edinburg2.png'
import ph3 from './../../../../assets/Shelters/Edinburg/edinburg3.png'
import ph4 from './../../../../assets/Shelters/Edinburg/edinburg4.png'
import ph5 from './../../../../assets/Shelters/Edinburg/edinburg5.png'
import ph6 from './../../../../assets/Shelters/Edinburg/edinburg6.png'






import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    .swiper{
        width: 80%;
        align-self: center;
    }
    .swiper-slide{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

const Box = styled.div`
    width:60%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .swiper{
        width: 80%;
        align-self: center;
    }
    .swiper-slide{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 95%;
        height: auto;
        border-radius: 40px;
    }

`

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: ${props => props.theme.fontlg};
    text-transform: none;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
`

function ShelterPage(text, link) {
    return (
        <Container>
            <Box>
                <Swiper
                    autoplay={{
                        delay: 2000,
                    }}
                    scrollbar={{
                        draggable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={ph1} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={ph2} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={ph3} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={ph4} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={ph5} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={ph6} alt="logo" /></SwiperSlide>
                </Swiper>
            </Box>
            <Box>
                <Title>
                    Edinburgh Dog and Cat Home
                </Title>
                <SubText>
                    Here at Edinburgh Dog and Cat Home, we strive to make sure that every pet has the loving home it deserves. And we get our claws into our cause.
                </SubText>
            </Box>
        </Container>
    );
}

export default ShelterPage;