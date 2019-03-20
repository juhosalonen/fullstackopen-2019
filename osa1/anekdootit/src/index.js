import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(6))

  const handlePointClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
}
const setRandom = () => {
    var min=0; 
    var max=6;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    setSelected(random)
}
  return (
    <div>
    <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div><button onClick={setRandom}>next anecdote</button></div>
      <div><button onClick={handlePointClick}>vote</button></div>
    <h1>Anecdote with most votes</h1>
    {props.anecdotes[points.indexOf(Math.max(...points))]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)