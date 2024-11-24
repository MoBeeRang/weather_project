import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchSearchWeather, ENDPOINTS,selectCity } from '../features/weather/weatherSlice';
import cityList from '../contents/cityList'

function MenuSelector() {
  const dispatch = useDispatch();
  const { selectedCity } = useSelector((state) => state.weather)
  
  const setSelectedCity = (e) => {
    dispatch(selectCity(e))
  }

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