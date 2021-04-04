import React, { useState, useEffect } from 'react';

const cn = (...args) => {
    return args.filter(x => x).join(' ');
};

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
            <div className={cn(`time-circle`, !isRunning && 'paused')}>
                <div className="time">
                    {seconds}
                </div>
            </div>
            <div className="buttons">
                {isRunning ?
                    (
                        <button className="play-pause" onClick={() => {
                            setIsRunning(false);
                        }}>
                            Pause
                        </button>
                    ) : (
                        <button
                            className="play-pause" onClick={() => {
                                setIsRunning(true);
                            }}>
                            Play
                        </button>
                    )
                }
                <button
                    disabled={!isRunning}
                    className="reset"
                    onClick={() => {
                        setIsRunning(false)
                        setSeconds(0);
                    }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;