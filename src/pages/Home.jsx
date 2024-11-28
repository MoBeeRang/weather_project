// 메인페이지
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CurrentWeather from '../components/CurrentWeather'
import Closet from '../components/slider/Closet'
import { Wrap, Main } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid2'
import { fetchSearchWeather } from '../features/weather/weatherSlice';
import { fetchSearchImages } from '../features/closet/closetSlice';
import useHeight from '../hooks/useHeight';


function Home() {
   //params :: Menu의 Height, Footer의 Height
   const height = useHeight(57, 100)

   const dispatch = useDispatch();
   const { searchResults: weatherResult, loading: weatherLoading, error: weatherError } = useSelector((state) => state.weather);
   const { searchResults: closetResult, loading: closetLoading, error: closetError } = useSelector((state) => state.closet);

  useEffect(() => {
    dispatch(fetchSearchWeather({ endpoint: ENDPOINTS.WEATHER, id: selectedCity }))
  }, [dispatch, selectedCity])
   
   useEffect(() => { 
      dispatch(fetchSearchImages(closetResult.main.temp))
   }, [dispatch, weatherResult])

  if ( weatherLoading || closetLoading ) return <p>loading</p>
  if ( weatherError ) return <p>error:{ weatherError }</p>
  if ( closetError) return <p>error:{ closetError }</p>

   
   return (
      <Wrap>
         <Menu />
         <Main $height={height}>
            <Grid container spacing={1} style={{marginTop: '150px'}}>
               <Grid size={4}>
                  <CurrentWeather />
               </Grid>
               <Grid size={8}>
                  <Closet />
               </Grid>
            </Grid>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home