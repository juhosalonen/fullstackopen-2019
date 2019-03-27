import React from 'react'

const Languages = ({ country }) => {
    const languages = country.languages.map(language => <li key={language.name}>{language.name} </li>)
    return (
        <ul>{languages} </ul>
    )
}
export default Languages