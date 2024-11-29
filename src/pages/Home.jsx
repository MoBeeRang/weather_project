// 메인페이지
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CurrentWeather from '../components/CurrentWeather'
import Closet from '../components/slider/Closet'
import { Wrap, Main } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid2'
import { fetchSearchWeather, ENDPOINTS } from '../features/weather/weatherSlice';
import { fetchSearchImages } from '../features/closet/closetSlice';
import useHeight from '../hooks/useHeight';

function Home() {
   //params :: Menu의 Height, Footer의 Height
   const height = useHeight(57, 100)

   const dispatch = useDispatch();
   const { searchResults: weatherResult, loading: weatherLoading, error: weatherError, selectedCity, selectedPreset } = useSelector((state) => state.weather);
   const { searchResults: closetResult, loading: closetLoading, error: closetError } = useSelector((state) => state.closet);

  useEffect(() => {
    dispatch(fetchSearchWeather({ endpoint: ENDPOINTS.WEATHER, id: selectedCity }))
  }, [dispatch, selectedCity])
   
   useEffect(() => {
    if (weatherResult && weatherResult.main) { // weatherResult와 main이 존재하는지 확인
        console.log('weatherResult:', weatherResult);
        console.log('Temperature:', weatherResult.main.temp);

        // weatherResult.main.temp를 이용하여 이미지 검색
        dispatch(fetchSearchImages(weatherResult.main.temp));
    }
   }, [dispatch, weatherResult,selectedPreset])

  if ( weatherLoading || closetLoading ) return <p>loading</p>
  if ( weatherError ) return <p>error:{ weatherError }</p>
   if (closetError) return <p>error:{closetError}</p>

   return (
      <Wrap>
         <Menu />
         <Main $height={height}>
            <Grid container spacing={1} style={{marginTop: '150px', alignItems: 'center'}}>
               <Grid size={4}>
                  <CurrentWeather weatherResult={weatherResult} />
               </Grid>
               <Grid size={8}>
                  <Closet closetResult={closetResult} ></Closet>
               </Grid>
            </Grid>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home