import React from 'react';


export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    
    let dotDiv;
    if (props.value === 1) {
      dotDiv = 
        <div className='dice--face dice-1' style={styles}>
            <div className='dot'></div>
        </div>
    }

    if (props.value === 2) {
      dotDiv = 
        <div className='dice--face dice-2' style={styles}>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
    }

    if (props.value === 3) {
      dotDiv = 
        <div className='dice--face dice-3' style={styles}>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
    }

    

    if (props.value === 4) {
      dotDiv = 
        <div className='dice--face dice-4' style={styles}>
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
        </div>
    }

    if (props.value === 5) {
      dotDiv = 
        <div className='dice--face dice-5' style={styles}>
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
            <div className='dot-container'>
                <div className='dot'></div>
            </div>  
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
        </div>
    }

    if (props.value === 6) {
      dotDiv = 
        <div className='dice--face dice-6' style={styles}>
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
            
            <div className='dot-container'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>  
        </div>
    }

    return (
        <div  className='die-section'
        onClick={props.holdDice}
        >
            {/* <div className="die--wrapper"  >{dotDiv}</div> */}
            {dotDiv}
        </div>

    );
}
