import React, {useState} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import TextField from '@material-ui/core/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function BdayForm({selectedDate, setSelectedDate,name,setName, birthdays, setBirthdays}) {

const [value, setValue] = useState(null);    


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
        <div style={{ width:'850px',marginTop:'25px',marginBottom:'20px', marginLeft:'500px', border: '1px solid whitesmoke'}}>
        <form onSubmit = {handleSubmit}>
            <TextField id="outlined-basic"  style={{marginRight:180}}  value={name} label="Name" size ='small' variant="outlined"  onChange ={handleChange}/>
            {/* <input
                type='text'
                name='name'
                value={name}
                onChange ={handleChange}
            
            
            /> */}
            


            {/* <DatePicker selected ={selectedDate} onChange={date=>setSelectedDate(date)} popperPlacement="bottom-end" /> */}
       
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birth Date"
        value={selectedDate}
        onChange={date=>setSelectedDate(date.$d)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

            
            <button className='submitbtn' style={{marginLeft:'50px', width:'90px', color:'#100c08 ', fontWeight:'bold'}}>Submit</button>
           
        </form>
        </div>
        
        
    )
}

export default BdayForm
