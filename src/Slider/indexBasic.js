// https://github.com/francoischalifour/react-metronome/blob/master/demo/src/App.js
import React, { Component } from 'react';
import sliderStyles from './slider.module.css';

class Slider extends Component {

  showSliderValue = () => {
    // var rangeSlider = document.getElementById("rs-range-line");
    const slider = this.input;
    // var rangeBullet = document.getElementById("rs-bullet");
    const bullet = this.bullet;

    bullet.innerHTML = slider.value;
    // rangeBullet.innerHTML = rangeSlider.value;

    // var bulletPosition = (rangeSlider.value / rangeSlider.max);
    const bulletPosition = slider.value / slider.max;
    // rangeBullet.style.left = (bulletPosition * 578) + "px";
    bullet.style.left = `${bulletPosition * 578}px`;
    console.log(`slider.value is ${slider.value}\nbullet is ${bullet}\nbulletPosition is ${bulletPosition}}`);
  }

  render() {
    return (
      <div className={sliderStyles.container}>
        <div className={sliderStyles.rangeSlider}>
          <span
            ref={node => this.bullet = node}
            // id="rs-bullet"
            className={sliderStyles.rsLabel}>0</span>
          <input
            ref={node => this.input = node}
            onInput={this.showSliderValue}
            // id="rs-range-line"
            className={sliderStyles.rsRange}
            type="range"
            value="0" min="0" max="200" />
        </div>

        <div className={sliderStyles.boxMinmax}>
          <span>0</span><span>200</span>
        </div>
      </div>
    );
  }
}

export default Slider;
