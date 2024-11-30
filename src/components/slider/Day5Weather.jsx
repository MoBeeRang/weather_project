// 메인페이지
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css/scrollbar'
// import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import { Scrollbar } from 'swiper/modules'
// import { Pagination } from 'swiper/modules'
import { Navigation } from 'swiper/modules'
import { useEffect, useState, useRef } from 'react'
import 'swiper/css'
import '../css/day5Weather.css'
function Day5Weather({ searchResults }) {
   const [weatherList, setWeatherList] = useState([])
   const [indexNum, setIndexNum] = useState(0)
   const swiperRef = useRef(null) // Swiper 인스턴스를 참조할 ref
   console.log('searchResults :')
   console.log(searchResults)

   useEffect(() => {
      if (searchResults && searchResults.list) {
         const dateObj = searchResults.list.reduce((acc, curr) => {
            // dt_txt에서 날짜 부분만 추출
            const date = curr.dt_txt.split(' ')[0]

            // 해당 날짜 그룹이 없으면 생성
            if (!acc[date]) {
               acc[date] = []
            }

            // 날짜 그룹에 데이터 추가
            acc[date].push(curr)

            return acc
         }, {})
         console.log('dateObj :')
         console.log(dateObj)
         // 객체를 배열로 변환하여 상태 업데이트
         const sortedList = Object.entries(dateObj).map(([date, dateGroup]) => ({
            date,
            data: dateGroup,
         }))
         console.log('sortedList :')
         console.log(sortedList)
         setWeatherList(sortedList)
      }
   }, [searchResults])
   useEffect(() => {
      console.log('swiperRef')
      console.log(swiperRef)
      // searchResults가 업데이트될 때마다 첫 번째 슬라이드로 이동
      if (swiperRef.current) {
         swiperRef.current.swiper.slideTo(0) // 첫 번째 슬라이드로 이동
      }
   }, [indexNum])

   console.log('weatherList :')
   console.log(weatherList)
   console.log('indexNum :' + indexNum)
   return (
      <>
         {weatherList.length > 0 && (
            <div className="common_margin_tb day5-container">
               <div className="controls">
                  {weatherList.map((item, idx) => (
                     <button key={idx} className={indexNum === idx ? 'active' : ''} onClick={() => setIndexNum(idx)}>
                        {item.date}
                     </button>
                  ))}
               </div>
               <Swiper
                  ref={swiperRef}
                  slidesPerView={4}
                  spaceBetween={30} //margin-right:30px
                  navigation={true}
                  modules={[Navigation]} //버튼형,바 형등 다양한 형태 존재
                  className="day5-swiper"
               >
                  {weatherList[indexNum].data.map((item) => (
                     <SwiperSlide key={item.dt} className="day5-swiper-slide">
                        <div style={{ padding: 20 }}>
                           <img src={item.weather[0].icon ? `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png` : 'https://openweathermap.org/img/wn/10d@2x.png'} alt={item.weather[0].description} />
                           <p style={{ fontWeight: 'bold' }}>{item.dt_txt.split(' ')[1]}</p>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="title">
                  <div className="text">{weatherList[indexNum].data[0].dt_txt.split(' ')[0]}</div>
               </div>
            </div>
         )}
      </>
   )
}
export default Day5Weather
