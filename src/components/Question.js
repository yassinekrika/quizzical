import { nanoid } from "nanoid"
export default function Question(props) {

    const dataQst = props.dataQst

    let arrAnswers = [...dataQst.incorrect_answers]
    arrAnswers.push(dataQst.correct_answer)


    function shuffle(array) {
        const newArray = [...array]
        const length = newArray.length
      
        for (let start = 0; start < length; start++) {
          const randomPosition = Math.floor((newArray.length - start) * Math.random())
          const randomItem = newArray.splice(randomPosition, 1)
      
          newArray.push(...randomItem)
        }
      
        return newArray
    }
    
    const shuffled = shuffle(arrAnswers)

    function handleCheck (btnText) {
        
    }

    const chooseBtn = shuffled.map(btn => {
        return  <button key={nanoid()} className="chooseBtn" onClick={handleCheck}>{btn}</button>
    })
    return (
        <div className="question">
            <h1 className="question">{dataQst.question}</h1>
            {chooseBtn}
            <hr></hr>
        </div>
    )
}