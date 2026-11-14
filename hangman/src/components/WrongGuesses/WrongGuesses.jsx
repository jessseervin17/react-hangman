// import SubmitGuess from '../SubmitGuess/SubmitGuess'
// import PuzzleWord from '../PuzzleWord/PuzzleWord'
function WrongGuesses( {puzzle, guessLetters, setGuessLetters} ){


    const checkLetterGuess = ()=>{
        let lettersNotInPuzzle=[]
        for (let ltr of guessLetters){
            if (!(puzzle.includes(ltr))){
            lettersNotInPuzzle.push(ltr)
            }
        }

        if (lettersNotInPuzzle.length>=6 && !(puzzle.includes(lettersNotInPuzzle[lettersNotInPuzzle.length-1]))){
            alert("Game over...\nPlay another round with the current or...\nPress 'Get Word' to play with a new word!")
            setGuessLetters([])
        }
        else{
            return lettersNotInPuzzle
        }




        // console.log(Boolean(guessLetters.length))
        // if (guessLetters.length!=0){
        //     let mostRecentGuess = guessLetters[guessLetters.length-1]
        //     let guessStatus=puzzle.includes(guessLetters[guessLetters.length-1])
        //     if (!(guessStatus)){
        //         return mostRecentGuess
        //     }
        // }
    }

    return (
        <>
        <h3>Letters Not Included</h3>
        <div id ="WrongGuess">
            <p>{checkLetterGuess()}</p>
        </div>
        </>
    )
}

export default WrongGuesses