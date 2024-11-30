export const getClothingKeyword = (temperature) => {
   if (temperature < 4) {
      return '패딩 겨울코트 목도리 추천'
   } else if (temperature >= 4 && temperature <= 8) {
      return '히트텍 착장 추천'
   } else if (temperature > 8 && temperature <= 11) {
      return '트렌치코트 야상 점퍼 스타일'
   } else if (temperature > 11 && temperature <= 16) {
      return '자켓 가디건 청자켓 니트 코디'
   } else if (temperature > 16 && temperature <= 19) {
      return '얇은 가디건 맨투맨 후드 긴바지 코디'
   } else if (temperature > 19 && temperature <= 22) {
      return '블라우스 긴팔티 슬랙스 봄 코디'
   } else if (temperature > 22 && temperature <= 27) {
      return '반팔 얇은 셔츠 여름 패션'
   } else {
      return '민소매 반바지 린넨 옷 여름 추천'
   }
}
