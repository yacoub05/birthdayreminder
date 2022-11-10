import React ,{useState} from 'react';

import BdayForm from './components/BdayForm.js';
import BdayList from './components/BdayList.js'
import Typography from '@material-ui/core/Typography';


function App() {

  const [name, setName] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [birthdays, setBirthdays] = useState([])
  
  
 
  return (
    <div className="app">

     
    {console.log('hey there', selectedDate)}
     <div className='allcontainer' >
     <Typography variant="h4" align='center' style={{marginTop:20}} >Add a birthday!</Typography>
        <div className='form'>
        <BdayForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} birthdays ={birthdays} setBirthdays = {setBirthdays} name = {name} setName = {setName}/>
        </div>
     
        {console.log(birthdays )}
        <div className='bdaylist' style={{position:'fixed'}}>
            <BdayList setBirthdays = {setBirthdays} birthdays = {birthdays}/>
        </div>
       `{birthdays.length == 0 ? (<div style={{display:'flex', width:'850px', marginLeft:'550px', marginTop:'50px',position:'fixed'}}><h1>No birthdays to show Please Add a birthday</h1></div>):(<div></div>)}`
        
    </div>
    

    </div>
  );
}

export default App;
