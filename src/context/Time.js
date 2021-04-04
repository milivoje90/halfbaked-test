import React from 'react';

function App() {
  return (
    <div className="globalTime">
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