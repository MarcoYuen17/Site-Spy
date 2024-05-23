import React, { BaseSyntheticEvent, useState } from "react";

interface AddressBarProps {
    currentAddress: string;
    onEnter: (newAddress: string) => void;
}

export const AddressBar: React.FC<AddressBarProps> = (props) => {
    const [address, setAddress] = useState(props.currentAddress);

    const handleUpdateAddressInput = (e: BaseSyntheticEvent) => {
        const newAddress = e.target.value || '';
        setAddress(newAddress);
    };

    const handleEnter = () => {
        props.onEnter(address);
    };

    return (
        <>
            <input type='search' value={address} onChange={handleUpdateAddressInput} />
            <button onClick={handleEnter} >Preview</button>
        </>
    );
}