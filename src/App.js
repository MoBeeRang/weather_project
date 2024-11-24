import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/common.css'
import DownLoadPage from './pages/DownLoadPage' //도시파일 필터링추출
import Day5WeatherPage from './pages/Day5WeatherPage'
function App() {
   //Tip!)라우트는 같은 컴포넌트와 연결 되어있으면 props가 바뀌어도 재 랜더링을 하지 않는 특징이 있다.
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/download" element={<DownLoadPage />} />
         <Route path="/day5" element={<Day5WeatherPage />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
