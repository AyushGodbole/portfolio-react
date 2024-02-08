import {createSlice} from '@reduxjs/toolkit'

const initalState = {
    isLoggedIn : true,
    role : "Admin",
    data : {}
}

const authSlice = createSlice({
    name:"auth",
    initialState : initalState,
    reducers:{},
});

export default authSlice.reducer;