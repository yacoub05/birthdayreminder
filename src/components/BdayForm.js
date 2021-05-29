import React, {useState} from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextField from '@material-ui/core/TextField';

function BdayForm({selectedDate, setSelectedDate,name,setName, birthdays, setBirthdays}) {

const handleChange =(e)=>{
    setName(e.target.value);
}

const handleSubmit =(e)=>{

   
    e.preventDefault();
    setBirthdays([
        ...birthdays, {selectedDate:selectedDate , name: name, completed: false, id: Math.random()*10000 }
    ]);
    setName('');

    
    

}

    return (
        
        <form onSubmit = {handleSubmit}>
            <TextField id="outlined-basic"  style={{marginRight:180}}  value={name} label="Name" size ='small' variant="outlined"  onChange ={handleChange}/>
            {/* <input
                type='text'
                name='name'
                value={name}
                onChange ={handleChange}
            
            
            /> */}
            


            <DatePicker selected ={selectedDate} onChange={date=>setSelectedDate(date)} popperPlacement="bottom-end" />

            
            <button>Submit</button>
           
        </form>
        
        
    )
}

export default BdayForm
