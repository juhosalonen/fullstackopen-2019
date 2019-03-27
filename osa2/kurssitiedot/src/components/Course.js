import React from 'react'

const Course = ({ course }) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)
const Header = (props) => (
    <div>
        <h1>{props.course}</h1>
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Content = ({ parts }) => parts.map(part =>
    <Part
        key={part.id}
        part={part}
    />
)

const Total = ({ parts }) => {
    const totalvalue = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>Yhteensä {totalvalue} tehtävää </p>
    )
}

export default Course