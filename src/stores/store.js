import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import closetReducer from '../features/closet/closetSlice'
const store = configureStore({
   reducer: {
      weather: weatherReducer,
      closet: closetReducer
   },
})
export default store
