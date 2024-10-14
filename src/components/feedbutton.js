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
                <b>Feed pet</b>
            </button>
            <br />
            <br />
                Hunger = { hunger }
        </div>
  )
  
}

export default FeedButton
