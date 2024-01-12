import React from 'react'
import { useEffect, useState } from 'react'
import axios, { getAdapter } from 'axios'
// React Hooks 
// 1. UseEffect() - Side effect or we can say this runs when the page loads
// 2. useState() - It is used to re - render the component whenever the value of the variable changes.
function Home() {

  const [data, setData] = useState()
  const [isCelsius, setCelsius] = useState(true)

  async function fetchData(latlon) {
    var response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=5d7cc24a13614f799ac234836231709&q=${latlon}&days=1&hour=0&aqi=no&alerts=no`)
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    console.log("Fetc4h data ")
    // we will make a get request to the api server to give us fresh weather report
    fetchData("35.410694 , -80.842850")
  }, [])

  function convert() {
    if (isCelsius) {
      setCelsius(false)
    }
    else {
      setCelsius(true)
    }
  }
  function getData(event) {
    console.log(event.target.value)
    fetchData(event.target.value)
  }
  return (

    <>
      {/* charlotte 35.19372920976958, -80.84402750407992
    mooresville 35.58675, -80.77903 
    greensboro  36.07427217772885, -79.79129361853253
    statesville 35.78768236101116, -80.87114060296588
    boone       36.214711577003676, -81.67463646029042
    raleigh     35.850891022862584, -78.65262856338356
    asheville   35.56284206860191, -82.57778465380004
    chapel hill 35.943448254307306, -79.02247300744109
    concord     35.39231235488204, -80.64171638320805
    durham      35.988936768207324, -78.90552984096716
   winstonsalem 36.11212032910314, -80.28923259806687
   fayetteville 35.079376230727846, -78.926943126791323
    high point  35.9999342198396, -79.99330151310035
    gastonia    35.25460587697525, -81.16233290912672
    cary        35.7513797270292, -78.78775595727137
    wilmington  34.20739228977235, -77.87482155169364 
*/}


      <div className="box">

        <div className="innerbox">

          <h1 >Weather Today in NC</h1>

          <form action="" class=".for">
            <p>Choose your Location </p>
            
            <div class="input-group mb-3">
              
              <select class="custom-select" id="inputGroupSelect01" onChange={getData}>
              <option value="35.410694, -80.842850" >Huntersville</option>
                <option value="35.19372920976958, -80.84402750407992">Charlotte</option>
              <option value="35.58675, -80.77903">Mooresville</option>
              <option value="35.850891022862584, -78.65262856338356">Raleigh</option>
              <option value="36.07427217772885, -79.79129361853253">Greensboro</option>
              <option value="35.78768236101116, -80.87114060296588">Statesville</option>
              <option value="36.214711577003676, -81.67463646029042">Boone</option>
              <option value="35.56284206860191, -82.57778465380004">Asheville</option>
              <option value="35.943448254307306, -79.02247300744109">Chapel Hill</option>
              <option value="35.39231235488204, -80.64171638320805">Concord</option>
              <option value="35.988936768207324, -78.90552984096716">Durham</option>
              <option value="36.11212032910314, -80.28923259806687">Winston-Salem</option>
              <option value="35.079376230727846, -78.92694312679133">Fayetteville</option>
              <option value="35.9999342198396, -79.99330151310035">High Point</option>
              <option value="35.25460587697525, -81.16233290912672">Gastonia</option>
              <option value="35.7513797270292, -78.78775595727137">Cary</option>
              <option value="34.20739228977235, -77.87482155169364">Wilmington</option>
              </select>
            </div>
          </form>

          <div class="tempcity">
            {
              isCelsius && isCelsius == true ? <h1>{data?.current?.temp_c}°C</h1> : <h1>{data?.current?.temp_f}°F</h1>
            }

            <h3>{data?.location?.name}, {data?.location?.region}, {data?.location.country} </h3></div>
          <div class="brokeimg">
            <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt="" />
            <p><b>Broken Clouds</b></p>
          </div>
          <div class="boxof3">
            <div class="humidity">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-thermometer-low" viewBox="0 0 16 16">
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
              </svg>
              <h3>{data?.current?.humidity}</h3>
              <p>Humidity</p>
            </div>
            <div class="wind">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              <h3>{data?.current?.wind_mph}mph</h3>
              <p>Wind</p>
            </div>
            <div class="AP">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
              </svg>
              <h3>{data?.current?.pressure_mb}</h3>
              <p>Air Pressure</p>
            </div>
          </div>
          <button className='btn btn-primary' onClick={convert} > {isCelsius ? "Farenhiet" : "Celsius"}</button>
        </div>
      </div>

    </>

  )
}

export default Home


