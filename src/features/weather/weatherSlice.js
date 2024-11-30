import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchWeather } from '../../api/weatherApi'
import { resultPreset } from '../../contents/resultPreset'
export const ENDPOINTS = {
   WEATHER: 'weather', //오늘날씨
   FORECAST: 'forecast', //5일날씨
}

export const fetchSearchWeather = createAsyncThunk('weather/fetchSearchWeather', async ({ endpoint, id }) => {
   const response = await getSearchWeather(endpoint, id)
   // console.log(response)
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      searchResults: null,
      selectedPreset: null,
      selectedCity: 1843564,
   },
   reducers: {
      selectCity(state, action) {
         // console.log(action.payload)
         state.selectedCity = action.payload
      },
      selectPreset(state, action) {
         console.log('selectPreset', action.payload)
         if (action.payload === 'reset') {
            state.selectedPreset = null
         } else {
            state.selectedPreset = resultPreset[action.payload]
         }
         // state.searchResults = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.searchResults = action.payload
         })
         .addCase(fetchSearchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const { selectCity, selectPreset } = weatherSlice.actions
export default weatherSlice.reducer
