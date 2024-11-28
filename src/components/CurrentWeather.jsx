import './css/CurrentWeather.css'

//오늘 날씨정보를 가져오고, 내용을 출력하기

function CurrentWeather({ searchResults }) {
  
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