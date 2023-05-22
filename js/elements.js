const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.increase-time')
const buttonDecreaseTime = document.querySelector('.decrease-time')
const buttonForestSound = document.querySelector('.forest-sound')
const buttonRainSound = document.querySelector('.rain-sound')
const buttonCafeteriaSound = document.querySelector('.cafeteria-sound')
const buttonFireplaceSound = document.querySelector('.fireplace-sound')
const buttonLightMode = document.querySelector('#light-mode')
const buttonDarkMode = document.querySelector('#dark-mode')
const forestVolume = document.querySelector('.volume-slider.forest')
const rainVolume = document.querySelector('.volume-slider.rain')
const cafeteriaVolume = document.querySelector('.volume-slider.cafeteria')
const fireplaceVolume = document.querySelector('.volume-slider.fireplace')
const root = document.querySelector(':root');

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonIncreaseTime,
  buttonDecreaseTime,
  buttonForestSound,
  buttonRainSound,
  buttonCafeteriaSound,
  buttonFireplaceSound,
  buttonLightMode,
  buttonDarkMode,
  forestVolume,
  rainVolume,
  cafeteriaVolume,
  fireplaceVolume,
  root
}