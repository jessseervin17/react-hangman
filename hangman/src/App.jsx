import { useState } from 'react'
import PuzzleWord from './components/PuzzleWord/PuzzleWord'
import SubmitGuess from './components/SubmitGuess/SubmitGuess'
import './App.css'

function App() {
  const [puzzle, setPuzzle] = useState("")
  const [guessLetters, setGuessLetters]=useState([])

  return (
    <>
    <PuzzleWord puzzle={puzzle} setPuzzle={setPuzzle} guessLetters={guessLetters}/>
    <SubmitGuess puzzle = {puzzle} guessLetters={guessLetters} setGuessLetters={setGuessLetters}/>
    </>
  )
}

export default App
