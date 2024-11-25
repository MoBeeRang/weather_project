import axios from 'axios'

const NAVER_CLIENT_ID = '3kv0hQ9Q2lYmLj_DYtQZ'

const NAVER_CLIENT_SECRET = 'VLA_yLqcI7'

const BASE_URL = 'https://openapi.naver.com'
const datalabApi = axios.create({
    // baseURL: '/v1/datalab',
    headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        'Content-Type': 'application/json'
    }
});

// 카테고리별 트렌드 조회
export const postSearchShopping = async (params) => {
    try {
        const response = await datalabApi.post('/v1/datalab/shopping/categories', params);
        return response.data;
    } catch (error) {
        console.error('Error fetching ShoppingSerch:', error.response?.data || error)
        throw error;
    }
};

export default datalabApi
