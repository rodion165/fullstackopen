import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}
const Button = ({handleClick, text}) =>  {
  return (
  <button onClick = {handleClick}>
    {text}
  </button>
)
}

const StatisticLine = ({ text, value }) => (
  <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>
)
const Statistics = (props) => {
  if(props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='positive' value={(props.good/props.total)*100 + '%'}/>
        <StatisticLine text='averge' value={props.good-props.bad/props.total}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const firstHeader = 'give feedback'
  const secondHeader = 'statistic'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total+1)
  }

  const handlNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total+1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total+1)
  }
  return (
    <div>
      <Header header={firstHeader}/>
      <Button handleClick={handleGoodClick} text= 'good' />
      <Button handleClick={handlNeutralClick} text= 'neutral'/>
      <Button handleClick={handleBadClick} text= 'bad' />
      <Header header={secondHeader}/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}


export default App

