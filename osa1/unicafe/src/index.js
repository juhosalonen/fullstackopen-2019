import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good || bad || neutral) {
    return (
      <div>
        <h2>statistiikka</h2>
        <table>
          <tbody>
            <Statistic text="hyvä" value={good} />
            <Statistic text="neutraali" value={neutral} />
            <Statistic text="huono" value={bad} />
            <Statistic text="yhteensä" value={good + bad + neutral} />
            <Statistic text="keskiarvo" value={(good + (bad * -1)) / (good + bad + neutral)} />
            <Statistic text="positiivisia" value={(good / (good + bad + neutral)) * 100} />
          </tbody>
        </table>
      </div>
    )
  }
  else return (
    <div><h4>Ei yhtään palautetta annettu</h4></div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text={"hyvä"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutraali"} />
      <Button handleClick={() => setBad(bad + 1)} text={"huono"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)