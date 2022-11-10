import React from 'react'
import moment from "moment";
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';




  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({


   

    tableContainer:{

        marginTop:6,
        marginLeft:500,
        width:800,
        overflowY: "auto",
        
    },
    
    table: {
      
      minWidth: 650,
    },
    tableCell: {
        width: 130,
        height: 40
      },
  });
  
  function createData(name, bornOn, birthday, countDown, age) {
    return { name, bornOn, birthday, countDown, age };
  }
  
  



const BdayCard=({name, selectedDate, bday,birthdays, setBirthdays})=> {


    const classes = useStyles();

    
    let nextYear;
    let comingYear;
    let countDown
    let ageInYear
    let timeBetween 

    let today = new Date()
    const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    YEAR = DAY * 365.24
    
    const countDownBday =(date)=>{



        countDown = ((comingYear.getTime()-today.getTime())/DAY)+1
        if(Math.floor(countDown)==365){
            return 'Happy Birthday!'
        }
        else{
        return Math.floor(countDown) +' days left!'
        }
    }
    const getAge=(date)=>{
        ageInYear = Math.floor(timeBetween / YEAR)
        return ageInYear+ ' years old'
    
    }
    const birthdate = (date)=>{
      
     

        let birthDate = date.getDate()
        let birthMonth = date.getMonth()+1
       
        timeBetween  = today.getTime()-date.getTime()

        
        if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate()+1 > birthDate)) {
        nextYear = new Date().getFullYear() + 1;
        }
        else {
        nextYear = new Date().getFullYear();
        }



        comingYear = new Date(moment( birthMonth+ '/' +birthDate+'/'+ nextYear))
        

        return moment(comingYear).format('LL')
    }

    

    const rows = [
        createData(name, moment(selectedDate).format('LL'),birthdate(selectedDate) ,countDownBday(selectedDate),getAge(selectedDate) ),
        
      ];


const handleDelete =()=>{
    setBirthdays(birthdays.filter((item)=>item.id !== bday.id));
};
const handleEdit =()=>{

}



    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
          {console.log('here ', rows.length)}
        <Table className={classes.table} size="small" aria-label="a dense table">
          {/* <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Born on</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Days left</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {rows.length > 0 ? ( rows.map((row) => (

              <StyledTableRow key={row.name}>
                
                <TableCell component="th" scope="row" style={{ width: 170 }}  >
                  {row.name}
                </TableCell>
                <TableCell align="right"    style={{ width: 150 }}>{row.bornOn}</TableCell>
                <TableCell align="right"    style={{ width: 150 }}>{row.birthday}</TableCell>
                <TableCell align="right"    style={{ width: 150 }}>{row.countDown}</TableCell>
                <TableCell align="right"    style={{ width: 150 }}>{row.age}</TableCell>
                <TableCell>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
              </StyledTableRow>
              
            ))):(<h1>Please add a birthday!</h1>) }

          
                
          </TableBody>
          
                
        </Table>
      </TableContainer>
    ); 
}

export default BdayCard
