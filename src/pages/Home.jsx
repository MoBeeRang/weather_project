// 메인페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CurrentWeather from '../components/CurrentWeather'
import useHeight from '../hooks/useHeight';
import Closet from '../components/slider/Closet'
import Grid from '@mui/material/Grid2'
function Home() {
   //params :: Menu의 Height, Footer의 Height
   const height = useHeight(57,100)
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