import {createSlice} from '@reduxjs/toolkit'

const initalState = {
    isLoggedIn : false,
    type: '',
    btnClick:false,
}

// btnClick is for opening and closing login/signup form
// type is to check if we want to login or signup

const authSlice = createSlice({
    name:"auth",
    initialState : initalState,
    reducers:{
        click:(state,action)=>{
            // console.log('sss',action?.payload?.value);
            state.type = action?.payload?.value;
            state.btnClick = true;
        },
        close:(state)=>{
            state.type = '';
            state.btnClick = false;
        }
    },
});

export const { click,close } = authSlice.actions;

export default authSlice.reducer;