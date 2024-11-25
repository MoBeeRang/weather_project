import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postSearchShopping } from '../../api/datalabApi.js'

// 초기 파라미터 상태
const initialParams = {
    startDate: new Date().toISOString().split('T')[0], // 오늘 날짜
    endDate: new Date().toISOString().split('T')[0],   // 오늘 날짜
    timeUnit: "month",
    category: [
        { name: "패션의류", param: ["50000000"] }
    ],
    device: "pc",
    gender: "f",
    ages: ["20", "30"]
};

export const fetchSearchShopping = createAsyncThunk('datalab/fetchSearchShopping', async (_, { getState }) => {
        const { params } = getState().datalab;
    const response = await postSearchShopping(params);
    console.log(response)
        return response;
})

const datalabSlice = createSlice({
   name: 'datalab',
   initialState: {
        loading: false,
        error: null,
        searchResults: null,
        params: initialParams
   },
   reducers: {
     // 날짜 범위 설정
        setDateRange(state, action) {
            const { startDate, endDate } = action.payload
            state.params.startDate = startDate
            state.params.endDate = endDate
        },
        // 시간 단위 설정
        setTimeUnit(state, action) {
            state.params.timeUnit = action.payload
        },
        // 카테고리 설정
        setCategories(state, action) {
            state.params.category = action.payload.map(cat => ({
                name: cat.name,
                param: [cat.id.toString()]
            }))
        },
        // 디바이스 설정
        setDevice(state, action) {
            state.params.device = action.payload
        },
        // 성별 설정
        setGender(state, action) {
            state.params.gender = action.payload
        },
        // 연령대 설정
        setAges(state, action) {
            state.params.ages = action.payload
        },
        // 전체 파라미터 리셋
        resetParams(state) {
            state.params = initialParams
        },
        // 전체 파라미터 한번에 설정
        setAllParams(state, action) {
            state.params = action.payload
        }},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchShopping.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchShopping.fulfilled, (state, action) => {
            state.loading = false
            state.searchResults = action.payload
         })
         .addCase(fetchSearchShopping.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const {
    setDateRange,
    setTimeUnit,
    setCategories,
    setDevice,
    setGender,
    setAges,
    resetParams,
    setAllParams
} = datalabSlice.actions
export default datalabSlice.reducer
