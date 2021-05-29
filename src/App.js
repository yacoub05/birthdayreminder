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

     

     <div className='allcontainer' >
     <Typography variant="h4" align='center' style={{marginTop:20}} >Add a birthday!</Typography>
        <div className='form'>
        <BdayForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} birthdays ={birthdays} setBirthdays = {setBirthdays} name = {name} setName = {setName}/>
        </div>
     
        {console.log(birthdays )}
        <div className='bdaylist'>
            <BdayList setBirthdays = {setBirthdays} birthdays = {birthdays}/>
        </div>
        
    </div>
    

    </div>
  );
}

export default App;
