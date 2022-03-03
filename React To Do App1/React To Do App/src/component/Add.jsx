import { TextField } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../redux/slice'

function Add() {
  const dispatch=useDispatch()
  const [data,setdata]=useState('')
  const [value,setValue]=useState([])
  const ind=useSelector(state=>state.tasks.index)
  const newData=useSelector(state=>state.tasks.value)
  const changeHandler=(event)=>
  {
    setdata(event.target.value)
  }
  const send=()=>
  { 
    setValue([...value,data])
    setdata('')
  }
  useEffect(()=>{
    dispatch(setTask(value))
  },[value])
 
  useEffect(()=>{
    setValue(newData)
  },[ind])
  console.log(ind)
  console.log(value)
  return (
    <div style={{display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:"20px 40px"
    }}>
<div>
        <TextField label="Task" variant='filled' color='primary' 
    onChange={changeHandler}></TextField></div>  
    <br/>
    <div>
    <Button variant="dark" onClick={send} >Add Task</Button>{' '}
    </div>
    </div>
  )
}
export default Add