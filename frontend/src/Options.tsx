import React from "react";
import { AddressBar } from "./AddressBar";

interface OptionsProps {
    currentAddress: string;
    onEnter: (newAddress: string) => void;
}

export const Options: React.FC<OptionsProps> = (props) => {
    return (
        <>
            <AddressBar currentAddress={props.currentAddress} onEnter={props.onEnter} />
        </>
    );
}