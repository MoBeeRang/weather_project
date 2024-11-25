import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../css/Closet.css'
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'

import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchShopping } from '../../features/datalab/datalabSlice'

function Closet() {
   const dispatch = useDispatch()
   const { searchResults,loading, error } = useSelector((state) => state.datalab)
   useEffect(() => { 
      dispatch(fetchSearchShopping())
   }, [])

   if(loading)return<p>loading</p>
   if (error) return<p>error:{ error}</p>
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
         {/* {searchResults &&
            searchResults.map((item) => (
               <SwiperSlide key={item.category}>
                  <div style={{ padding: 20 }}>
                     <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                  </div>
               </SwiperSlide>
            ))} */}
         </Swiper>
      </div>
   )
}

export default Closet
