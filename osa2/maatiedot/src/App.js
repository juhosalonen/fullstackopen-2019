import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([ 
    { wind_kph: '', wind_dir: '', temp_c:'', icon:''}])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    handleCountryChange()
  }
  const handleCountryChange = () => {
    
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })

  }, [])

  return (
    <div>
      <Filter
        text = "find countries: "
        handleFilterChange={handleFilterChange}
        handleCountryChange = {handleCountryChange}
        newFilter={newFilter}
      />
      <Countries
        countries={countries}
        setWeather={setWeather}
        setNewFilter={setNewFilter}
        newFilter = {newFilter}
        weather={weather}
        setCountries = {setCountries}
      />
    </div>
  )
}

export default App