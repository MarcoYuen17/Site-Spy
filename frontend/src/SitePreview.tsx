import React from "react";

export const SitePreview: React.FC<{siteURL: string}> = ({siteURL}) => {
    return (
        <><p>Preview: {siteURL}</p></>
    );
}