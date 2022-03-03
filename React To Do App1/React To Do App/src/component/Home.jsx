import { Button, Card, CardContent, Checkbox, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import { Delete, EventNote } from '@material-ui/icons'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setTask } from '../redux/slice'
import TodoList from './TodoList'

function Home() {
 const data = useSelector((state) => state.tasks.value)
 console.log(data)
  return (
    <div>
      <Grid container spacing={1}>
        {
          data.map((task, ind) =>
          (
           <TodoList index={ind} task={task}/>
          ))
        }
      </Grid>
    </div>
  )
}
export default Home