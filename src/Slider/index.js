import React, { Component } from 'react';
import sliderStyles from './slider.module.css';

class Slider extends Component {
  state = {
    mmValue: 120
  }

  handleChange = event => {
    const slider = this.input;
    const bullet = this.bullet;

    bullet.innerHTML = this.state.mmValue;

    const bulletPosition = (this.state.mmValue - 60) / 160;
    bullet.style.left = `${bulletPosition * 578}px`;

    this.setState({ mmValue: event.target.value });
  }

  render() {
    return (
      <div className={sliderStyles.container}>
        <div className={sliderStyles.rangeSlider}>
          <span
            ref={node => this.bullet = node}
            className={sliderStyles.rsLabel}>120</span>
          <input
            ref={node => this.input = node}
            onChange={this.handleChange}
            className={sliderStyles.rsRange}
            type="range"
            value={this.state.mmValue}
            min='59' max='221' />
        </div>

        <div className={sliderStyles.boxMinmax}>
          <span>60</span><span>220</span>
        </div>
      </div>
    );
  }
}

export default Slider;
