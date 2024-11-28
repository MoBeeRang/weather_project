import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../css/Closet.css'
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'
function Closet({ searchResults }) {

    return (
      <div className="common_margin_tb">
         <Swiper
            slidesPerView={3}
            spaceBetween={30} //margin-right:30px
            modules={[Scrollbar, Autoplay]} //버튼형,바 형등 다양한 형태 존재
            className="mySwiper"
            scrollbar={{
               hide: false,
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
          >
             { searchResults}
         {/* { {searchResults.items.size > 1 &&
            searchResults.items.map((item) => (
               <SwiperSlide key={item.category}>
                  <div style={{ padding: 20 }}>
                     <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                  </div>
               </SwiperSlide>
            ))} } */}
         </Swiper>
      </div>
   )
}

export default Closet
