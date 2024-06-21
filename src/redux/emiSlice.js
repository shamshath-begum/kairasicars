import { createSlice } from "@reduxjs/toolkit";

const initialState={
    emi:[]
}

export const emiSlice=createSlice({
    name:"emi",
    initialState,
    reducers:{
        emi:(state,action)=>{
            state.emi=action.payload
            console.log(action.payload)
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

export const {emi} = emiSlice.actions
export default emiSlice.reducer