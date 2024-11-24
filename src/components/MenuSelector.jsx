import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchWeather, ENDPOINTS } from '../features/weather/weatherSlice';
import cityList from '../contents/cityList'

function MenuSelector() {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState(cityList[0].code); // 기본값: 첫 번째 도시

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchSearchWeather({endpoint: ENDPOINTS.WEATHER, cityCode: selectedCity}));
    }
  }, [selectedCity, dispatch]);

  return (
    <div>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        {cityList.map((city) => (
          <option key={city.id} value={city.id}>
            {city.kor_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MenuSelector;