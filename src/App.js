import React from 'react';
import Metronome from './Metronome';
import Slider from './Slider';

const App = () => (
  <React.Fragment>

    <Slider />

    <Metronome
      tempo={120}
      render={({
        tempo,
        beatsPerMeasure,
        playing,
        beat,
        onPlay,
        onTempoChange,
      }) => (
          <React.Fragment>
            <div>
              {tempo} <small>BPM</small>
            </div>
            <div>
              {beatsPerMeasure}/{beatsPerMeasure} <small>T.S.</small>
            </div>

            <div>
              <input
                type="range"
                min={40}
                max={240}
                value={tempo}
                onChange={event => onTempoChange(event.target.value)}
              />

              <span>
                {beat}/{beatsPerMeasure}
              </span>

              <button onClick={onPlay}>
                {playing ? 'Pause' : 'Play'}
              </button>
            </div>
          </React.Fragment>
        )}
    />
  </React.Fragment>
);

export default App;
