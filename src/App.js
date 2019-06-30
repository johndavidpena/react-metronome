import React from 'react';
import Metronome from './Metronome';
import metronomeStyles from './metronome.module.css';
import sliderStyles from './slider.module.css';

import { IoMdPlay } from 'react-icons/io';
import { IoMdPause } from 'react-icons/io';

const App = () => (
  <Metronome
    tempo={120}
    render={({
      tempo,
      bulletLeft,
      beatsPerMeasure,
      playing,
      beat,
      onPlay,
      onTempoChange,
    }) => (
        <div className={metronomeStyles.metronome}>
          {/* <div>
            {tempo} <small>BPM</small>
          </div>
          <div>
            {beatsPerMeasure}/{beatsPerMeasure} <small>T.S.</small>
          </div> */}

          <div className={sliderStyles.container}>
            <div className={sliderStyles.rangeSlider}>
              <span
                className={sliderStyles.rsLabel}
                style={{ left: `${bulletLeft}` }}
              >{tempo}</span>

              <input
                onChange={event => onTempoChange(event.target.value)}
                className={sliderStyles.rsRange}
                type="range"
                value={tempo}
                min={60} max={220} />
            </div>

            <div className={sliderStyles.boxMinmax}>
              <span>60</span><span>220</span>
            </div>
          </div>

          <div className={metronomeStyles.bottom}>
            {playing ? <IoMdPause onClick={onPlay} /> : <IoMdPlay onClick={onPlay} />}

            <span className={metronomeStyles.beat}>
              {beat}/{beatsPerMeasure}
            </span>
          </div>
        </div>
      )}
  />
);

export default App;
