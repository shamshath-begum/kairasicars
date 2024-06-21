import { createSlice } from "@reduxjs/toolkit";

const initialState={
    customer:[]
}

export const customerSlice=createSlice({
    name:"customer",
    initialState,
    reducers:{
        details:(state,action)=>{
            state.customer=action.payload
            console.log(action.payload.customers)
            
            
            
            
        },
        logout: (state) => {
           
            state.name = "";
            state.email = "";
            state.cpassword="";
            state.role="";
            state. password="";

        },
    }
})

export const {details,logout} = customerSlice.actions
export default customerSlice.reducer