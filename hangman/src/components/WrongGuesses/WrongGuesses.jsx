// import SubmitGuess from '../SubmitGuess/SubmitGuess'
// import PuzzleWord from '../PuzzleWord/PuzzleWord'
function WrongGuesses( {puzzle, guessLetters} ){


    const checkLetterGuess = ()=>{
        let lettersNotInPuzzle=[]
        for (let ltr of guessLetters){
            if (!(puzzle.includes(ltr))){
                lettersNotInPuzzle.push(ltr)
            }
        }
        return lettersNotInPuzzle




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