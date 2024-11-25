import axios from 'axios'

const BASE_URL = 'https://openapi.naver.com'

const NAVER_CLIENT_ID = 'xMvJaUTtHLGroOamO_Ff'

const NAVER_CLIENT_SECRET = 'o4NSkMldMV'

const datalabApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        'Content-Type': 'application/json'
    }
});

/* 요청 params 예시
{
  "startDate": "2017-08-01",
  "endDate": "2017-09-30",
  "timeUnit": "month",
  "category": [
      {"name": "패션의류", "param": [ "50000000"]},
      {"name": "화장품/미용", "param": [ "50000002"]}
  ],
  "device": "pc",
  "gender": "f",
  "ages": [ "20",  "30"]
}
*/

// 카테고리별 트렌드 조회
export const postSerchShopping = async (params) => {
    try {
        const response = await datalabApi.post('/v1/datalab/shopping/categories', params);
        return response.data;
    } catch (error) {
        console.error('Error fetching ShoppingSerch:', error);
        throw error;
    }
};

export default datalabApi
