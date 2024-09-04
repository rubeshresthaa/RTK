import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLocal, removeCartsFromLocal, setCarts } from "../../hooks/localStorage";


export const cartSlice=createSlice({
  name:'cartSlice',
  initialState:{
    carts:getCartFromLocal(),
  },
  reducers:{
    setToCarts:(state,action)=>{
      const isExist=state.carts.find((cart)=>cart._id===action.payload._id)
      //cart exist chaina vaye add
      if(!isExist){
        state.carts.push(action.payload)
        setCarts(state.carts)
      }else{
        //update
        state.carts=state.carts.map((cart)=>{
          return action.payload._id===cart._id? action.payload: cart
        })
        setCarts(state.carts)

      }

    },




    },
    removeCart:(state,action)=>{
      state.carts=[];
      removeCartsFromLocal()

      
    }
  }
)


export const {setToCarts,removeCart}=cartSlice.actions;