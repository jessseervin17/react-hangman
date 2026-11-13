import words from '../../words.json'

function PuzzleWord( {puzzle, setPuzzle, guessLetters} ){
    const fetchWord = ()=>{
        setPuzzle(words[Math.floor(Math.random()*words.length)])
    }

    const displayWord = ()=>{
        let output = []
        for (let char of puzzle){
            if (guessLetters.includes(char)){
                output.push(char)
            }
            else{
                output.push("_")
            }
        }
        // console.log(puzzle, output)
        return output.join(" ")
        // return puzzle
    }

    return (
        <>
        <p>{displayWord()}</p>
        <button type="button" onClick={() => fetchWord()}>Get a Word</button>
        </>
    )
}

export default PuzzleWord

