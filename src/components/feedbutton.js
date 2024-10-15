import React, { useState} from 'react'
import './feedbutton.css'

const FeedButton = () => {
    const [hunger, setHunger] = useState(0);

    function handleFeed() {
        alert('Fed pet! ');
        setHunger(100);
    }
    
    return (
        <div>
            <button onClick={handleFeed}>
                <img src='https://media.istockphoto.com/id/901501348/vector/slice-of-melted-cheese-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=0cIsVfLHiabGD1NGDZEfE1hIBmD5DQuzNuLK8Owvyo8=' alt='Feed img' className='pizza'/>
            </button>
            <br />
            <br />
                Hunger = { hunger }
        </div>
  )
  
}

export default FeedButton
