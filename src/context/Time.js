import React, { useState, useEffect } from 'react';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => window.clearInterval(id);
        }
        return undefined;
    }, [isRunning]);


    return (
        <div className="globalTime">
            <button onClick={() => setSeconds(seconds + 1)}>incr seconds</button>
            <div className='time-circle'>
                <div className="time">
                    {seconds}
                </div>
            </div>
            <div className="buttons">
                <button className="play-pause" onClick={() => {
                    setIsRunning(true);
                }}>
                    Play
                </button>
                <button className="play-pause" onClick={() => {
                    setIsRunning(false);
                }}>
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