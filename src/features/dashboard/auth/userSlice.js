import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUser } from "../../../hooks/localStorage";

export const userSlice=createSlice({
  name:'userSlice',
  initialState:{
    user:getUserFromLocal()
  },
  reducers:{
    addUser:(state,action)=>{
      state.user=action.payload; // null cha vaye naya user add garcha 
      setUser(state.user) //setUser ma vako state add gareko

    },
    removeUser:(state,action)=>{
      state.user=null;
      removeUserFromLocal()
    }

  }
})

export const {addUser,removeUser} =userSlice.actions;