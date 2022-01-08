import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = value => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }
  useEffect(() => {
        {
          switch (userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
              setResult('YOU WIN!')
              break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
              setResult('YOU LOSE!')
              break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
              setResult('ITS A DRAW!')
              break
          }
        }
      }, [computerChoice, userChoice])
    

  return (
    <div className="App">
      <h1>User Choice: {userChoice}</h1>
      <h1>Computer Choice: {computerChoice}</h1>
      <h4>{result}</h4>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  )
}

export default App
