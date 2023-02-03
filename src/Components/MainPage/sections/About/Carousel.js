import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
import logo from './../../../../assets/ToolsAssets/dinoFree.png'
import tuz from './../../../../assets/ToolsAssets/img3.png'
import nft1 from './../../../../assets/Nft/nft1.png'
import nft2 from './../../../../assets/Nft/nft2.png'
import nft3 from './../../../../assets/Nft/nft3.png'
import nft5 from './../../../../assets/Nft/nft5.png'
import nft6 from './../../../../assets/Nft/nft6.png'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Container = styled.div`
    width: 100%;
    height:100%;

    @media (max-width: 64em) {
        height: 40vh;
        width: 90vw;
        justify-content: center;
    }


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
    
    .swiper-button-next{
        color:${props=>props.theme.white};
        @media (max-width: 64em) {
        display: none;
    }
    }

    .swiper-button-prev{
        color:${props=>props.theme.white};
        @media (max-width: 64em) {
        display: none;
    }
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }


`

function Carousel() {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}

                pagination={{
                    type: 'bullets',

                }}
                scrollbar={{
                    draggable: true
                }}
                grabCursor={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={logo} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tuz} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5122.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5123.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5124.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5125.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5127.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5128.PNG"} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5134.PNG"} alt="logo" />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default Carousel;