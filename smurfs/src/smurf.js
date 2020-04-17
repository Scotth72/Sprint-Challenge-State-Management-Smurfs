import React from 'react';

export const Smurf= ({smurf}) => {
    return(
        <div>
            <h1>Name: {smurf.name}</h1>
            <h2>Age:{smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
        </div>
    )
}