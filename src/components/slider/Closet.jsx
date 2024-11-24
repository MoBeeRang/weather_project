import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../css/Closet.css'
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'

import { useDispatch, useSelector } from 'react-redux'
// import { fetchSearchMovieCredit } from '../../features/movies/moviesSlice'
// import { useParams } from 'react-router-dom'

function Closet() {
//    const { movieId } = useParams()
//    const dispatch = useDispatch(fetchSearchMovieCredit())
//    const { movieCredit, loading, error } = useSelector((state) => state.movies)
//    useEffect(() => {
//       if (movieId) dispatch(fetchSearchMovieCredit(movieId))
//    }, [dispatch, movieId])
//    if (loading) return <p>loading중..</p>
//    if (error) return <p>error: {error}</p>
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
            <SwiperSlide key='157658657567'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo1.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
            </SwiperSlide>
            <SwiperSlide key='123234234233'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
                </SwiperSlide>      
                       <SwiperSlide key='1231'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo1.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
            </SwiperSlide>
            <SwiperSlide key='12323433'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
                </SwiperSlide>
                       <SwiperSlide key='1256765731'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo1.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
            </SwiperSlide>
            <SwiperSlide key='315675623'>
                <div style={{ padding: 20 }}>
                <img src={'/images/logo.png'} alt='설명' />
                <p style={{ fontWeight: 'bold' }}>옷</p>
                </div>
            </SwiperSlide>    
         </Swiper>
      </div>
   )
}

export default Closet
