import { useState, useEffect } from 'react';

function useHeight(menuHeight = 57, footerHeight = 100) {
    const [height, setHeight] = useState(600);

    useEffect(() => {
        const calculateHeight = () => {
            const viewportHeight = window.innerHeight; // 브라우저 전체 높이
            let resultHeight = viewportHeight - menuHeight - footerHeight
            if (resultHeight < 500) { resultHeight = 500 }
            setHeight(resultHeight); // 이미지 높이 계산
        };

        calculateHeight(); // 초기 높이 설정
        window.addEventListener('resize', calculateHeight); // 리사이즈 시 높이 재계산
        return () => { //언마운트 될때 리스너 남아있으면 resize 등록될 때마다 불필요하게 쌓일 수 있으니 제거해줘야 함. 까먹지 말자.
            window.removeEventListener('resize', calculateHeight);
        };
  }, [menuHeight, footerHeight]);

  return height;

}
export default useHeight