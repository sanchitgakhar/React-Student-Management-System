import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"users",
    initialState:{
        userdata:{},
    },
    reducers:{
        userAuthenticated:(state,action)=>{
            state.userdata = action.payload
        },
    },
})
export const {userAuthenticated} =userSlice.actions
export default userSlice.reducer
