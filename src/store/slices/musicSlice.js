import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    initialState:{
        Playing:null,
        IsMusicReady:false
    },
    name:"MusicSystem",
    reducers:{
        changeMusic:(state,action)=>{
            state.Playing = action.payload
        },
        readyToPlay:(state,action)=>{
            state.IsMusicReady = action.payload
        }
    }
})

export const {changeMusic,readyToPlay} = musicSlice.actions;
export default musicSlice.reducer;