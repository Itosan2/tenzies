import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti';
import crown from './crown.png'


export default function App() {
    const [dice,setDice] = React.useState(allNewDice())
    const [tenzies,setTenzies] = React.useState(false)
    const [counter, setCounter] = React.useState(1)
    // localStorage.removeItem('tenziesScore')
    const [tenziesScore, setTenziesScore] = React.useState(
      localStorage.getItem('tenziesScore') || 0
    )
    const [breakRecord,setBreakRecord] = React.useState(false)

  //   const [, setNotes] = React.useState(
  //     () => JSON.parse(localStorage.getItem("notes")) || []
  // )


    React.useEffect(()=>{
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die=>die.value === firstValue)
      if (allHeld && allSameValue) {
        if (tenziesScore===0 || tenziesScore> counter){
          localStorage.setItem("tenziesScore",counter)
          setTenziesScore(counter)
          setBreakRecord(true)
        }
          setTenzies(true)
      }    

    },[dice])

    function generateNewDie(){
      return {
        value : Math.ceil(Math.random() * 6),
        isHeld : false,
        id : nanoid()
      }  
    }

    function allNewDice() {
      const newDice = [];
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie())
      }
      return newDice;
    }

    const element = dice.map(die=>
      <Die value={die.value}
           key={die.id}
           isHeld ={die.isHeld}
           holdDice = {()=>holdDice(die.id)}
      />
    )  

    function rollDice(){
      if(!tenzies) {
        setCounter(preCount=>preCount=counter+1)
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
      } else {
        setBreakRecord(false)
        setCounter(1)
        setTenzies(false)
        setDice(allNewDice())
      }
    }  

    function holdDice(id) {
      setDice(oldDice => oldDice.map(die => {
          return die.id === id ? 
              {...die, isHeld: !die.isHeld} :
              die
      }))
    }

    function resetScore(){
      localStorage.removeItem('tenziesScore')
      setTenziesScore(0)
    }
  
    return (
        <div className="main--container">
            {tenzies && <Confetti />}
            <div className="tenzies--text">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            <div className='counter--container'>
              <div>
                <div className='counter--text'>Record :</div>
                <div className='counter--num'>{tenziesScore}</div>
                {breakRecord ? 
                <span><img className="crown" src={crown}/></span>
                : null}
                
              </div>

            

              <div>
                <div className='counter--text'>Roll Count :</div>
                <div className='counter--num'>{counter}</div>
              </div>
            </div>

            <div className="die--container">
               {element}
            </div>
            <div className='btn--box'> 
              
              <button className="btn reset--btn" onClick={resetScore}>Reset Record
              </button>
              <button className="btn roll--btn" onClick={rollDice}>{tenzies ? 'New Game' :'Roll'}
              </button>
            </div>
        </div>
    );
}