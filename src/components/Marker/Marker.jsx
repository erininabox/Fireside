import React from 'react';

import './Marker.scss';

export default function Marker ({ thisPage, pageOn }) {
    return (
        <div>
            {
                pageOn >= thisPage ? <div className="marker marker-active"></div>
                    : <div className="marker"></div>
            }
        </div>
    )
}