import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import { toast } from 'react-toastify';
import getObjectsOwnedByAddress from './ObjectsScript.tsx';


const DrawerContainer = styled.div`
    width:85%;
    min-height: 100vh;
    margin: 0 auto; //
    gap: 1vh;
    background-color: lightblue;
    display: flex; // гибкий контейнер
    flex-direction: column;
    justify-content: flex-start; //выравнивание по центру
    align-items: flex-start; // выравнивание по вертикали по центру
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const Input = styled.input`
    width: 70%;
    height: 2vh;
    margin-top: 2vh;
    display: inline-block;
    background-color: white;
    color: black;
    outline: none;
    border: 1px;
    border-color: black;
    align-self: center;
    margin-left: 0%;

    font-size: 1vw;
    padding: 0.9rem 2rem;
    border-radius: 10px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(1.05);
    }
`


function ShowObjects() {
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const [value, setValue] = React.useState('base');
    const [objects, setObj] = React.useState([]);
    const [k, setK] = React.useState(0)

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        if (objects.length > 0) {
            toggleDrawer()
        } else {
            if (k != 0) {
                notifyWarning("You dont have objects")
            }
        }
        setK(1);
    }, [objects])
    async function func() {
        if (value.length != 42) {
            notifyWarning("Incorrect Address")
        } else {
            getObjectsOwnedByAddress(value).then(spis => setObj(spis))
        }
    }
    return (
        <>
            <Input placeholder='Input Object ID' onChange={(e) => setValue(e.target.value)}  />
            <Button text={"Show objects"} link='' funct={func} />
            {<Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    size={500}
                    className='bla bla bla'
                >
                    <div>
                        <DrawerContainer>
                            <div>
                                1
                            </div>
                        </DrawerContainer>
                    </div>
                </Drawer>}
        </>
    );
}

export default ShowObjects;