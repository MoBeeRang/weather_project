export const getClothingKeyword = (temperature) => {
    if (temperature < 4) {
        return '패딩 겨울코트 목도리';
    } else if (temperature >=4  && temperature <= 8) {
        return '울코트 히트텍 가죽옷';
    } else if (temperature > 8 && temperature <= 11) {
        return '트렌치코트 야상 점퍼';
    } else if (temperature > 11 && temperature <= 16) {
        return '자켓 가디건 청자켓 니트 청바지';
    } else if (temperature > 16 && temperature <= 19) {
        return '얇은가디건 맨투맨 후드 긴바지';
    }else if (temperature > 19 && temperature <= 22) {
        return '블라우스 긴팔티 면바지 슬랙스';
    }else if (temperature > 22 && temperature <= 27) {
        return '반팔 얇은셔츠 반바지 면바지';
    }else {
        return '민소매 반팔 반바지 짧은치마 린넨 옷';
    }
};