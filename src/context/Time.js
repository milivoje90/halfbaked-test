import React, { useState, useEffect } from 'react';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('seconds', seconds);
    }, [seconds]);

    
    console.log('count', count);

    return (
        <div className="globalTime">
            <button onClick={() => setSeconds(seconds + 1)}>incr seconds</button>
            <button onClick={() => setCount(count + 1)}>incr count</button>
            <div className='time-circle'>
                <div className="time">
                    00:04
                </div>
            </div>
            <div className="buttons">
                <button className="play-pause">
                    Play
                </button>
                <button className="play-pause">
                    Pause
                </button>
                <button className="reset">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;