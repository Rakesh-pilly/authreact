import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {islogggin: false},
    reducers: {
        login(state){

            state.islogggin = true
        },
        logout(state){
            state.islogggin = false
        }
    }
});


export const authActions = authSlice.actions



export const store = configureStore({
    reducer: authSlice.reducer
})