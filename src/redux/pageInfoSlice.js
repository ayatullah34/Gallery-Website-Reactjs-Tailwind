import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPageData = createAsyncThunk(
    'pageInfo/getPageData',
    async () => {
        const response = await axios({
            method: 'GET',
            url: `https://w3yz.com/api/ch`,
            headers: { 'content-type': 'application/json' },
        })
        return response
    }
)

const pageInfoSlice = createSlice({
    name: "pageInfo",
    initialState: {
        isLoading: false,
        pageData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPageData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPageData.fulfilled, (state, action) => {
                state.pageData = action.payload.data
                state.isLoading = false
            })
            .addCase(getPageData.rejected, (state) => {
                state.isLoading = false
            })
    }
})
export const { } = pageInfoSlice.actions
export default pageInfoSlice.reducer


