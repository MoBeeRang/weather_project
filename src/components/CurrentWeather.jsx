import './css/CurrentWeather.css'
import { useEffect, useState } from 'react';
import { fetchSearchWeather,ENDPOINTS, selectCity} from '../features/weather/weatherSlice'; 
import { useDispatch, useSelector } from 'react-redux';

//오늘 날씨정보를 가져오고, 내용을 출력하기

function CurrentWeather() {
  const dispatch = useDispatch()
  const { searchResults, loading, error, selectedCity } = useSelector((state) => state.weather)

  const [weatherImage, setWeatherImage] = useState('/images/clear.png'); // 기본 날씨 이미지

  useEffect(() => {
    console.log('selectedCity')
    console.log(selectedCity)
    dispatch(fetchSearchWeather({ endpoint: ENDPOINTS.WEATHER, id: selectedCity }))
    
  }, [dispatch, selectedCity])

  if(loading)return<p>loading</p>
  if (error) return<p>error:{ error}</p>
  
  return (
    <>
      {searchResults && (
        <div className="window-container">
            <div className="window-frame" style={{backgroundImage:`url(${weatherImage})`}}>
            {searchResults.weather[0].main}:{searchResults.weather[0].description}
            <br/>

            <img style={{
              width: '30px',
              height: '30px',
              background: 'none',
            }} src={`https://openweathermap.org/img/wn/${searchResults.weather[0].icon}.png`} />
            <br/>

            {searchResults.name}
            { searchResults.main.temp}
            </div>
        </div>
      )}
    </>
  )
}
export default CurrentWeather