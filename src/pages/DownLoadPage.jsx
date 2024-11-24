// 메인페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import DownLoad from '../components/DownLoad';
import useHeight from '../hooks/useHeight';
function Home() {
   const height = useHeight(57,100)
   return (
      <Wrap>
         <Menu />
          <Main $height={height}>
            <DownLoad/>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home