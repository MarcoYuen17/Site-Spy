import React, { useState } from "react";

export const SitePreview: React.FC<{siteURL: string}> = ({siteURL}) => {
    const [highlightedElement, setHighlightedElement] = useState(null); // TODO: type?

    return (
        <><p>Preview: {siteURL}</p></>
    );
}