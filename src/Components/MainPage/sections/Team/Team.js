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
    min-height: 90vh;
    width:100%;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        background-color: black;
    }
`

const Container = styled.div`
    width:90vw;
    margin: 1vh auto;
    //background-color: white;
    display: flex; // гибкий контейнер
    justify-content: space-around; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    flex-wrap: wrap;
    @media (max-width: 64em) {
        margin-top: -2vh;
        background-color: black;
    }
    .swiper-button-next{
        color:black;
        @media (max-width: 64em) {
            color: #DD6B20;
        }
    }

    .swiper-button-prev{
        color:black;
        @media (max-width: 64em) {
            color: #DD6B20;
        }
    }

`
const RowContainer = styled.div`
    width:90vw;
    margin: 1vh auto;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    gap:15vw;
    border-radius: 40px;
    flex-wrap: wrap;
    @media (max-width: 64em) {
        flex-direction: column;
        justify-content: center;
        gap: 10vh;
        margin-top: 10vh;
    }

`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
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
                        <Card link= "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmTJmX1UtEXgwc7H7g6zmnwZpK8P1XzVZyw8cw3rCeagSp/balu.png" name="Balu" position="Bengal Cat" />
                        <Card  link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmTJmX1UtEXgwc7H7g6zmnwZpK8P1XzVZyw8cw3rCeagSp/ikka.png" name = "Ikki" position = "Bengal Cat"/>
                        <Card  link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmTJmX1UtEXgwc7H7g6zmnwZpK8P1XzVZyw8cw3rCeagSp/denchik.png" name = "Tyupa" position = "Black Cat"/>
                    </RowContainer>
                    <RowContainer>
                        <Card link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmTJmX1UtEXgwc7H7g6zmnwZpK8P1XzVZyw8cw3rCeagSp/tim.png" name = "Tim" position="Blue Point"/>
                        <Card link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmTJmX1UtEXgwc7H7g6zmnwZpK8P1XzVZyw8cw3rCeagSp/yosya.png" name = "Yosya" position="Snowshoe"/>
                        <Shape title={"Only Cats"} text = {"In fact, it is cats who manage this project, people do all the routine work."}/>
                    </RowContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <RowContainer>
                        <Card/>
                        <Card />
                        <Card />
                    </RowContainer>
                    <RowContainer>
                        <Card/>
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