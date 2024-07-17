import React, { useState } from 'react';
import './SpyClient.scss';
import { SitePreview } from './SitePreview';
import { Options } from './Options';
import { AddressBar } from './AddressBar';

export const SpyClient: React.FC = () => {
    const [siteURL, setSiteURL] = useState<string>('');

    const handleChangeSiteURL = (newSiteURL: string) => {
        setSiteURL(newSiteURL);
    }

    return (
        <>
            <h1 id='app'>
                FE
            </h1>
            {
                siteURL ? (
                    <>
                        <SitePreview siteURL={siteURL} />
                        <Options currentAddress={siteURL} onEnter={handleChangeSiteURL} />
                    </>
                ) : (
                    <>
                        <AddressBar currentAddress={siteURL} onEnter={handleChangeSiteURL} />
                    </>
                )
            }
            
        </>
    )

};
