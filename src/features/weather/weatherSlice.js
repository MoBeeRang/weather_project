import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchWeather } from '../../api/weatherApi'

//엔드포인트 상수(한번 정해지면 못바꿈)관리, 오타방지&가독성용, fetchSerchWeather 쓸때 함께 불러와 쓴다.
export const ENDPOINTS = {
  WEATHER: 'weather',
  FORECAST: 'forecast',
};

//async 매개변수 받을때 {}로(비구조화 할당) 받는거 주의. createAsyncThunk는 1개는 그냥 ()로 중괄호 없이 받아도 되지만, 두개이상의 매개변수를 받을때는 반드시 json객체나 (혹은 배열)로 받아야 한다~
//날씨 검색, endpoint :: [weather 오늘날씨 /forecast 5일날씨] (path parameter)
export const fetchSearchWeather = createAsyncThunk('weather/fetchSearchWeather', async ({ endpoint, city }) => {
   const response = await searchWeather(endpoint, city)
   return response.data
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      searchResults: null,
   },
   reducers: {},
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

export default weatherSlice.reducer
