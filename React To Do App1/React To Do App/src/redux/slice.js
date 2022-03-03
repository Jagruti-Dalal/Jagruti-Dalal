import { createSlice } from "@reduxjs/toolkit";
const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        value:[""],
        index:""
    },
    reducers:{
        setTask:(state,action)=>{
            state.value=action.payload
        },
        delTask:(state,{payload})=>
        {   
            state.value.splice(payload,1)
            state.index=payload
        }
    }
})
export const {setTask,delTask} =taskSlice.actions;
export default taskSlice.reducer;