import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import ShelterPage from './ShelterPage';



const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
    border-radius: 40px;
    background-color: #DD6B20;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    .swiper{
        width: 100%;
        height: 100%;
        align-self: center;
    }
    .swiper-slide{
        width: 90vw;
        height: 75vh;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper-button-next{
        color:${props => props.theme.text}
    }

    .swiper-button-prev{
        color:${props => props.theme.text}
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 0px solid ${props => props.theme.text};
    width: fit-content;

`

function Shelters() {
    return (
        <Section>
            <MainTitle>
                Shelters
            </MainTitle>
            <Container>
                <Swiper
                    pagination={{
                        type: "bullets",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ShelterPage text = {"Text"} link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmfYMkCjh2K4abaqP9UyjbyxA3RtfF4VSgwV8rtYWHFqjL"/>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Container>
        </Section>
    );
}

export default Shelters;