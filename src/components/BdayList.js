import React from 'react'
import BdayCard from './BdayCard.js'
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles({


   

    tableContainer:{
        
        marginTop:6,
        marginLeft:250,
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



function BdayList({birthdays, setBirthdays}) {

    const classes = useStyles();


    return (



        


        <div className='birthdaycontainer'>


<TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" style={{ width: 170 }}>Name</StyledTableCell>
              <StyledTableCell align="left" style={{ width: 150 }}>Born on</StyledTableCell>
              <StyledTableCell align="left" style={{ width: 150 }}>Birthday</StyledTableCell>
              <StyledTableCell align="left" style={{ width: 150 }}>Days left</StyledTableCell>
              <StyledTableCell align="left" style={{ width: 150 }}>Age</StyledTableCell>
            </TableRow> 
          </TableHead>
        
        </Table>
      </TableContainer>



            
              {birthdays.map(bday=>(
                  <BdayCard 

                  birthdays={birthdays}
                  setBirthdays = {setBirthdays}
                  key={bday.key} 
                  bday = {bday}
                  name = {bday.name}
                  selectedDate = {bday.selectedDate}
                  
                  />
              ))}
            
        </div>
    )
}

export default BdayList
