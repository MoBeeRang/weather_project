import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchImages } from '../../api/closetApi.js'
import { getClothingKeyword } from '../../utils/weatherKeywords.js'

export const fetchSearchImages = createAsyncThunk('scj/fetchSearchImages', async (temperature) => {
   const keyword = getClothingKeyword(temperature)
   const response = await getSearchImages(keyword)
   // console.log("closetApi");
   // console.log(response);
   return response
})

const closetSlice = createSlice({
   name: 'closet',
   initialState: {
      loading: false,
      error: null,
      searchResults: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchImages.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchImages.fulfilled, (state, action) => {
            state.loading = false
            state.searchResults = action.payload
         })
         .addCase(fetchSearchImages.rejected, (state, action) => {
            state.loading = false
            if (action.error.message === 'Request failed with status code 429') {
               state.searchResults = []
               state.error = null
            } else {
               state.error = action.error.message
            }
         })
   },
})

export default closetSlice.reducer
