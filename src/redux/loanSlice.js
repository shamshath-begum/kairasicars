import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loan:[]
}

export const loanSlice=createSlice({
    name:"loan",
    initialState,
    reducers:{
        loanRedux:(state,action)=>{
            state.loan=action.payload
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

export const {loanRedux} = loanSlice.actions
export default loanSlice.reducer