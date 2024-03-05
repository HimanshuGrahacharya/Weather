
import React, { useState } from 'react';
// import React, { useEffect } from "react"; 

import './css/style.css';
import axios from "axios";
function Tempapp() {


  const apiKey = "2e320e2616041936969a333786b1ec59";
  const [inputCity,setInputCity]= useState("")
  const [data, setData] = useState({})
  const getWeatherDetails = (cityName) => {
    if(!cityName) return
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +  "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
   setInputCity(e.target.value) 
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  
}

  // useEffect(() => {
  //   getWeatherDetails("delhi")
  // },[])
    return (
      <>
        <div className='page'>
          <div className="col-md-12">
            <div className="weatherBg">
              <h1 className="heading">Weather App</h1>

              <div className="d-grid gap-3 col-4 mt-4">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChangeInput}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="col-md-12 text-center mt-5">
              <div className="shadow rounded weatherResultBox">
                <img
                  className="weatherIcon"
                  src="https://purepng.com/public/uploads/large/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png"
                  alt=""
                />
                <h5 className=" weatherCity"> {data?.name}</h5>
                <h6 className="weatherTemp">
                  {(data?.main?.temp - 273.15).toFixed(2)}°C{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Tempapp;
