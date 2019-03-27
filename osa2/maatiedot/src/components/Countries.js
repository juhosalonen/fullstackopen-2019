import React, { useEffect } from 'react'
import axios from 'axios'
import Button from './Button'
import Languages from './Languages'

const Countries = (props) => {
    const hook = () => {
        axios
            .get(`https://api.apixu.com/v1/current.json?key=cf7548091be44f3fa32165559192603&q=${countries2[0].capital}`)
            .then(response => {
                props.setWeather(
                    {
                        wind_kph: response.data.current.wind_kph,
                        wind_dir: response.data.current.wind_dir,
                        temp_c: response.data.current.temp_c,
                        icon: response.data.current.condition.icon
                    })
            })
    }

    const countries2 = props.countries.filter(country => (country.name.toUpperCase()).includes(props.newFilter.toUpperCase()))
    
    if (countries2.length >= 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (countries2.length !== 1) {
        return countries2.map(country =>
            <div key={country.name}>
                {country.name}
                <Button handleClick={() => props.setNewFilter(country.name)} text={"show"} />
            </div>
        )
    }
    else {
        const renderCountry = countries2.map(country =>
            <div key={country.name}>
                <h1>{country.name}</h1>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h2>languages</h2>
                <Languages country={country} />
                <img src={country.flag} alt="flag" width="20%" height="20%"></img>
                <h1>Weather in {country.capital} </h1>
                <div> <b>Temperature:</b> {props.weather.temp_c} Celsius</div>
                <img src={props.weather.icon} alt="flag" width="10%" height="10%"></img>
                <div> <b>Wind:</b> {props.weather.wind_kph} kph direction {props.weather.wind_dir}</div>
            </div>
        )
        useEffect(hook, [])
        return (renderCountry)
    }
}

export default Countries