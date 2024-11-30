// 메인페이지
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Wrap, Main } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid2'
import { fetchSearchWeather, ENDPOINTS } from '../features/weather/weatherSlice'
import useHeight from '../hooks/useHeight'
import Day5Weather from '../components/slider/Day5Weather'
function Day5WeatherPage() {
   //params :: Menu의 Height, Footer의 Height
   const height = useHeight(57, 100)

   const dispatch = useDispatch()
   const { searchResults, loading, error, selectedCity } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchSearchWeather({ endpoint: ENDPOINTS.FORECAST, id: selectedCity }))
   }, [dispatch, selectedCity])

   console.log('searchResults ' + searchResults)
   if (loading) return <p>loading</p>
   if (error) return <p>error:{error}</p>

   return (
      <Wrap>
         <Menu />
         <Main $height={height}>
            <Grid container spacing={1} style={{ marginTop: '150px', alignItems: 'center' }}>
               <Grid size={12}>
                  <Day5Weather searchResults={searchResults} />
               </Grid>
            </Grid>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Day5WeatherPage
