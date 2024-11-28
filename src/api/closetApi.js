import axios from 'axios'

const API_KEY = "AIzaSyCrdwOCObSlYy940Q7Z_LpHEGfSpNaPjeY"; // Google API Key
const CX = "d7f9f2d0cc9484c19"; // Custom Search Engine ID (쿠팡 도메인 기반)
const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const closetApi = axios.create({
    baseURL: BASE_URL,
    headers: {
    accept: 'application/json',
    },
    params: {
        key: API_KEY,
        cx: CX,
        q: query,
        searchType: "image", // 이미지 검색 활성화
        num: 7,
    },
});

// 카테고리별 트렌드 조회
export const getSearchImages = async (temperature) => {
    try {
        const response = await closetApi.get('', {
            params: {
                q: query
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetchImages:', error)
        throw error
    }
};

export default closetApi
