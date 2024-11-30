import axios from 'axios'

// const API_KEY = 'AIzaSyCrdwOCObSlYy940Q7Z_LpHEGfSpNaPjeY' // Google API Key
// const CX_COOPANG = "d7f9f2d0cc9484c19" // Custom Search Engine ID (쿠팡 도메인 기반)
// const CX_ALL = "a727a1b6fef874e38"
// const CX_PINTEREST = '7307d0ce089ae47ca'

//부계정
const API_KEY = 'AIzaSyC7Qw-PGMMMihLo04T19hL4P3l8wJB5-XI'
// const CX_PINTEREST = 'f18b8c3faba0d4afe'
// const CX_COOPANG = 'f18b8c3faba0d4afe'
const CX_ALL = '91e11416ddc3c4a96'
const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const closetApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
   params: {
      key: API_KEY,
      cx: CX_ALL,
      searchType: 'image', // 이미지 검색 활성화
      num: 10,
   },
})

// 카테고리별 트렌드 조회
export const getSearchImages = async (query) => {
   try {
      const response = await closetApi.get('', {
         params: {
            q: query,
         },
      })
      return response.data.items
   } catch (error) {
      console.error('Error fetchImages:', error)
      throw error
   }
}

export default closetApi
