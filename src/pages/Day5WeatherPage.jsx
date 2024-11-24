// 5일의 날씨 안내 페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import useHeight from '../hooks/useHeight';
import Day5Weather from '../components/Day5Weather'
function Home() {
   //뷰높이 구해주는 커스텀 Hook. 현재 브라우저창 화면의 높이에서 menu, footer 높이만큼 제외한 높이를 반환. 항상 꽉차게 보여줄 수 있음.
   //params :: Menu의 Height, Footer의 Height
   const height = useHeight(57,100)
   return (
    <Wrap>
        <Menu />
        <Main $height={height}>
            <Day5Weather/>
        </Main>
        <Footer />
    </Wrap>
   )
}

export default Home