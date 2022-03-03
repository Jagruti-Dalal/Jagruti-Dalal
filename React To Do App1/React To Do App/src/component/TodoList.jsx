import { Button, Card, CardContent, Checkbox, Grid, TextareaAutosize, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTask } from '../redux/slice'

const useStyles = makeStyles((theme) =>
({
    grid:{
        border:(props)=>(props.dt?props.deadline?"solid yellow":"solid black":"solid pink"),
        margin:10
    },
    cardcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  taskname: {
    textDecoration: (props)=>(props.cond?"line-through":'')
  },
  textarea:{
    marginBottom:10,
    padding:10,
    border:"solid",
    width:'auto',
  },
  checkbox:{
    marginBottom:10,
  },
  deadline:{
      color:"red"
  }
}))

function TodoList(props) {
    const [cond,setCond]=useState(false)
    const [deadline,setDeadline]=useState(false)
    const [dt,setDt]=useState("")
    const classes = useStyles({cond,deadline,dt})
    const ref=useRef()
    var now = new Date();
    console.log(now)

    useEffect(()=>
    {
        if(dt.valueOf()<now.valueOf())
        {
            setDeadline(true)
        }
        else
        setDeadline(false)
    },[dt])
  
    const date = (event) => {
        var date = new Date(event.target.value)
        setDt(date)
      }
      console.log(dt)
      const del=(i)=>
      { 
        dispatch(delTask(i))
      }
      const check=(event)=>
      {
        setCond(!cond)
        }  
      const dispatch=useDispatch()
  return (
  <> 
  <Grid item xs={6} sm={12} key={props.index} >
    <Card sx={{ maxWidth: 345 }} className={classes.grid}>
      <CardContent className={classes.cardcontent}>
        <Typography  ref={ref} className={classes.taskname} variant='h3'>{props.task}</Typography>
        <Checkbox color="default" 
        className={classes.checkbox} 
         onChange={check} />
        <input type='date' className={classes.date} 
        onChange={date} />
        <TextareaAutosize className={classes.textarea}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Add Task Description Here,"
          style={{ height:80, width: 500 }}
        />
        <Button variant='outlined' color='primary'
         onClick={()=>del(props.index)}><Delete/></Button>
        {dt? deadline?<Typography variant='h4' className={classes.deadline}>Due Day is passed.</Typography>:
        <Typography variant='h4' >Complete the Task</Typography>:
        <Typography variant='h4' >Add Due Date</Typography>}
      </CardContent>
    </Card>
  </Grid>
  </> 
  )
}
export default TodoList