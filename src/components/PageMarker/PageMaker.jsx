import React from 'react';

import './PageMarker.scss';
import Marker from '../Marker/Marker';

export default function PageMarker ({ page }) {
    return (
        <div id="pagemarker-wrapper">
            <div id="pagemarker-container">
                <Marker thisPage={0} pageOn={page} />
                <Marker thisPage={1} pageOn={page} />
                <Marker thisPage={2} pageOn={page} />
                <Marker thisPage={3} pageOn={page} />
                <Marker thisPage={4} pageOn={page} />
                <Marker thisPage={5} pageOn={page} />
            </div>
        </div>
    )
}