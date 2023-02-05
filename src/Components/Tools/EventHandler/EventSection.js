import React from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import Button from '../../Button';
import { toast } from 'react-toastify';

const Section = styled.div`
    min-height: 100vh;
    width:100%;
    color: ${props => props.theme.body};
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`

function EventSection() {
    const wallet = useWallet();
    const provider = new JsonRpcProvider(Network.DEVNET);
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    async function getEv() {
        const subscriptionId = await provider.subscribeEvent(
            { SenderAddress: wallet.address },
            (e) => {
              alert("Subscribed");
            }
          );
    }
    return (
        <Section>
            <Button funct={getEv} text = {"Click"}/>
        </Section>
    );
}

export default EventSection;