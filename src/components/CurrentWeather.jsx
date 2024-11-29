import './css/CurrentWeather.css'
import { getWeatherKeyword } from '../utils/weatherIconPath'
import { getTemperatureColor} from '../utils/temperatureColor'
import { WrapedParticles } from '../styles/StyledComponent'
//오늘 날씨정보를 가져오고, 내용을 출력하기
import React from 'react';
import { loadFull } from 'tsparticles';
import { particlesConfigs } from '../contents/particlesConfigs'; // 상태별 설정 파일

const ptCommOptions = {
    fullScreen: {
			enable: false
  },
    interactivity: {
      events: { onhover: { enable: false }, onclick: { enable: false } },
    },
    retina_detect: true,
}

function CurrentWeather({ weatherResult }) {
  const particlesInit = async (main) => {
    await loadFull(main); // tsParticles 초기화
  };
  console.log('weatherResults')
  console.log(weatherResult)
  let id = "clear sky"
  let temp = 0
  if (weatherResult) {
    id = weatherResult.weather[0].description
    temp = weatherResult.main.temp
  }
  const images = getWeatherKeyword(id)
  const tempColor = getTemperatureColor(temp)

    // 날씨 상태에 따른 옵션 가져오기  //clear,rain,snow
  const particlesOptions = particlesConfigs[images.weatherType] || particlesConfigs.clear;

  const options = {
    ...ptCommOptions,
    ...particlesOptions, 
  }
  return (
    <>
      {weatherResult && (
        <div className="window-container" >
          <WrapedParticles id="tsparticles" init={particlesInit} options={options}  $backgroundImage ={images.backgroundImage }/>
          <div className='window-glass'>

          </div>
          <div className="window-frame">
            <div className="text-conts">
              <div>
                <img style={{
                  width: '30px',
                  height: '30px',
                  background: 'none',
                    }} src={`https://openweathermap.org/img/wn/${images.icon}.png`} />
              </div>
              <div className='text-area'>{images.name} : 온도({weatherResult.main.temp})°C</div>
              <div>
                <div className="temp-dot"
                  style={{
                      backgroundColor: tempColor, // 동그라미 색상
                  }}
                ></div>
              </div>
              </div>
          </div> 
        </div>
      )}
    </>
  )
}
export default CurrentWeather