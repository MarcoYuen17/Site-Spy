import React, { useState } from "react";
import { AddressBar } from "./AddressBar";

type Operator = '>' | '>=' | '==' | '<=' | '<';

interface OptionsProps {
    currentAddress: string;
    onEnter: (newAddress: string) => void;
}

export const Options: React.FC<OptionsProps> = (props) => {
    const [isFullPage, setIsFullPage] = useState<boolean>(true);
    const [frequency, setfrequency] = useState<number>(30);
    const [name, setName] = useState<string>(props.currentAddress);
    const [operation, setOperation] = useState<Operator>('==');
    const [argument, setArgument] = useState<string | number>('');

    return (
        <>
            <AddressBar currentAddress={props.currentAddress} onEnter={props.onEnter} />
            
            <div>
                <span>Name:</span>
                <input type='text' />
            </div>

            <div>
                <span>Surveil Full Page?</span>
                <input type='radio' id='fullPageOption1' name='fullPage' value='fullYes' /> {/* TODO: Switch */}
                <label htmlFor='fullPageOption1'>Yes</label>
                <input type='radio' id='fullPageOption2' name='fullPage' value='fullNo' />
                <label htmlFor='fullPageOption2'>No</label>
            </div>

            <div>
                {isFullPage ? (
                    <>
                        <span>What text are you looking for?</span>
                        <textarea />
                    </>
                ) : (
                    <>
                        <span>What are you looking for within this element?</span>
                        {/* TODO: Select > >= == <= < */}
                        <input type='text' />
                    </>
                )}                    
            </div>

            <div>
                <span>Frequency (mins):</span>
                <input type='number' id='surveilFreq' name='surveilFreq' min={0} /> {/* TODO: Discrete slider */}
            </div>
            
            <button>Test</button>
            <button>Save</button>
        </>
    );
}