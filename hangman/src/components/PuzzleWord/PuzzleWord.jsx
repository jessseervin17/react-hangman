import words from '../../words.json'
import axios from 'axios'

function PuzzleWord( {puzzle, setPuzzle, guessLetters} ){
    const fetchWord = async()=>{
        const word_types = ["noun", "adjective", "adverb", "verb"]
        let randomIdx = Math.floor(Math.random()*word_types.length)
        let puzzle_word = await axios.get(`https://randomapi.dev/api/words?type=${word_types[randomIdx]}&count=5`)
        setPuzzle(puzzle_word.data[0].word)
    }

    const displayWord = ()=>{
        console.log(puzzle)
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

