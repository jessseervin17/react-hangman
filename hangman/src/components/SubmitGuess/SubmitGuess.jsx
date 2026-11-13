import WrongGuesses from '../WrongGuesses/WrongGuesses'
function SubmitGuess( {puzzle, guessLetters, setGuessLetters} ){
    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(guessLetters, event.target.elements.guess.value, guessLetters[guessLetters.length-1], guessLetters.length)
        setGuessLetters(guessLetters+event.target.elements.guess.value)
        if (guessLetters.includes(event.target.elements.guess.value)){
            alert("You've already guessed this word, try again!");
        }
        // console.log(guessLetters+event.target.elements.guess.value, PuzzleWord.displayWord.output)
    }


    return (
        <>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <label>Enter a guess</label>
                <input type="text" name="guess" maxLength={1}/> 
                <button type="submit">Submit</button>
            </form>
            <WrongGuesses puzzle={puzzle} guessLetters={guessLetters} setGuessLetters = {setGuessLetters} />
        </>
    )
}

export default SubmitGuess