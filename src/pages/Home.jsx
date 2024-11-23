// 메인페이지
import { Wrap, Main,ImageContainer,ResponsiveImage } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react';
function Home() {
     const [imageHeight, setImageHeight] = useState(0);

 useEffect(() => {
    const calculateHeight = () => {
      const viewportHeight = window.innerHeight; // 브라우저 전체 높이
      const menuHeight = 57; // 고정된 menu 높이
      const footerHeight = 100; // 고정된 footer 높이
      setImageHeight(viewportHeight - menuHeight - footerHeight); // 이미지 높이 계산
    };

    calculateHeight(); // 초기 높이 설정
    window.addEventListener('resize', calculateHeight); // 리사이즈 시 높이 재계산
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
   return (
      <Wrap>
         <Menu />
           <Main>
              
            <ImageContainer $height={imageHeight} src="/images/window.png">
            <ResponsiveImage
                 // 테스트용 이미지
                alt="테스트 이미지"
                
            />
            </ImageContainer>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home