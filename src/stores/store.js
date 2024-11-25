import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import datalabReducer from '../features/datalab/datalabSlice'
const store = configureStore({
   reducer: {
      weather: weatherReducer,
      datalab: datalabReducer
   },
})
export default store
