import React, {useState} from 'react';

const SmurfForm = ({addNewSmurf}) => {
    const[data, setData] = useState({
        name: '',
        age: '',
        height: ''
        
    })

    const [submit, setSubmit] = useState()

    const handleChanges = e => {
        setData({...data, [e.target.name]: e.target.value})
        setSubmit(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addNewSmurf(submit)
    }
//addnewSmurf
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'> Name</label>
            <input onChange={handleChanges} 
                   name='name' 
                   type='text'
            />
             <label htmlFor='age'> Age</label>
            <input onChange={handleChanges} 
                   name='age' 
                   type='text'
            />  
            <label htmlFor='height'> Height</label>
            <input onChange={handleChanges} 
                   name='height' 
                   type='text'
            />  
            <button type='submit'>Add to Smurf Village</button> 
        </form>
    )
}