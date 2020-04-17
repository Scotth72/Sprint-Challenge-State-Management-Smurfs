import axios from 'axios';
import { useEffect} from 'react';

export const smurfData = () => {
    dispatch({ type: 'GET_DATA' })
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        console.log(response)
        dispatch({ type: 'SHOW_DATA', payload: response.data})
    })
    .catch(err=> {
        dispatch({ type: 'WATCH_ERROR', payload: 'Received an error'})
    })
} 