import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../css/Closet.css'
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'
function Closet({ closetResult }) {
   console.log('closetResult')
   console.log(closetResult)
   let uniqueClosetResult = []
   if (closetResult && closetResult.length > 0) {
      uniqueClosetResult = Array.from(new Map(closetResult.map((item) => [item.title, item])).values()).slice(0, 5)
   }
   return (
      <div className="common_margin_tb closet">
         <Swiper
            slidesPerView={3}
            spaceBetween={30} //margin-right:30px
            modules={[Scrollbar, Autoplay]} //버튼형,바 형등 다양한 형태 존재
            className="closet-swiper"
            scrollbar={{
               hide: false,
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
         >
            {uniqueClosetResult.length > 0 &&
               uniqueClosetResult.map((item) => (
                  <SwiperSlide key={item.title} className="closet-swiper-slide">
                     <div style={{ padding: 20 }}>
                        <img src={item.image.thumbnailLink ? `${item.image.thumbnailLink}` : '/images/clear.png'} alt={item.title} />
                        {/* <p style={{ fontWeight: 'bold' }}>{item.title}</p> */}
                     </div>
                  </SwiperSlide>
               ))}
         </Swiper>
      </div>
   )
}

export default Closet
