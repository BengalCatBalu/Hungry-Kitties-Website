import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../Button';
import Card from './Card';

import balu from './../../../../assets/Tomas.png'
import Shape from './Shape';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Section = styled.section`
    min-height: 80vh;
    width:100%;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Container = styled.div`
    width:90vw;
    margin: 1vh auto;
    background-color: white;
    display: flex; // гибкий контейнер
    justify-content: space-around; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    flex-wrap: wrap;

`
const RowContainer = styled.div`
    width:90vw;
    margin: 1vh auto;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    flex-wrap: wrap;

`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 0px solid ${props => props.theme.body};
    width: fit-content;

`


function Team() {
    return (
        <Section id = "team">
            <MainTitle>
                Team
            </MainTitle>
            <Container>
                <Swiper
                    pagination={{
                        type: "none",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <RowContainer>
                        <Card link="./../../../../assets/balu.png" name="Balu" position="Developer" />
                        <Card />
                        <Card />
                    </RowContainer>
                    <RowContainer>
                        <Card link="./../../../../assets/balu.png" name="Balu" position="Developer" />
                        <Card />
                        <Shape />
                    </RowContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <RowContainer>
                        <Card link="./../../../../assets/balu.png" name="Balu" position="Developer" />
                        <Card />
                        <Card />
                    </RowContainer>
                    <RowContainer>
                        <Card link="./../../../../assets/balu.png" name="Balu" position="Developer" />
                        <Card />
                        <Shape />
                    </RowContainer>
                </SwiperSlide>
                </Swiper>
            </Container>
        </Section>
    );
}

export default Team;