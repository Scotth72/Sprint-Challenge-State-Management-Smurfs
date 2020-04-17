import React, { useEffect} from 'react';
import SmurfForm from './smurfForm';
import Smurf from './smurf';


export const SmurfList = (props) => {
    return(
        <div>
            {props.smurf.map(smurf =>{
                return<Smurf key={smurf.id} smurf={smurf}/>
            })}
            <SmurfForm smurfs={props.smurfs} addNewSmurf={props.addNewSmurf} />
        </div>
    )
}

