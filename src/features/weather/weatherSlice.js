import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchWeather } from '../../api/weatherApi'

//엔드포인트 상수(한번 정해지면 못바꿈)관리, 오타방지&가독성용, fetchSerchWeather 쓸때 함께 불러와 쓴다.
export const ENDPOINTS = {
  WEATHER: 'weather', //오늘날씨
  FORECAST: 'forecast', //5일날씨
};

export const fetchSearchWeather = createAsyncThunk('weather/fetchSearchWeather', async ({ endpoint, id }) => {
   
   console.log('endpoint:')
   console.log(endpoint)
   console.log('id:')
   console.log(id)
   const response = await searchWeather(endpoint, id)
   console.log(response)
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      searchResults: null,
      selectedCity: 1843564,
   },
   reducers: {
      selectCity(state, action) { 
      console.log(action.payload)
      state.selectedCity = action.payload
   } },
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

export const { selectCity } = weatherSlice.actions
export default weatherSlice.reducer
