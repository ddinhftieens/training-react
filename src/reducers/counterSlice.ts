import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    counter: 1,
    num: 2,
    lst: [{
        id: new Date().getTime(),
        name: ''
    }],
    count: 0
}

export const getLstUser = createAsyncThunk('counter/getLstUser', async () => {
    return axios.get("https://training.atwom.edu.vn/api/public/student/getLst?_keySearch=&_limit=10&_offset=0", {
        headers: {
            'Content-Type': 'application/json'
        },
    });
});

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: (state, action) => {
            state.counter += action.payload;
        },
        dec: (state, action) => {
            state.counter -= action.payload;
        },
        incNum: (state, action) => {
            state.num += action.payload;
        },
        decNum: (state, action) => {
            state.num -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLstUser.pending, (state) => {

        });
        builder.addCase(getLstUser.fulfilled, (state, action: any) => {
            if (action.payload.data.success) {
                state.lst = action.payload.data.data.lst;
                state.count = action.payload.data.data.count;
            }
        });
        builder.addCase(getLstUser.rejected, (state, action: any) => {
            state.lst = [];
            state.count = 0;
        });
    },
})

export default counterSlice.reducer
export const { inc, dec, incNum, decNum } = counterSlice.actions