import {
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
} from "./elements.js"

export default function({sound,timer}) {

  buttonLightMode.addEventListener('click', function() {
    root.style.setProperty('--bg-color', '#121214')
    root.style.setProperty('--text-color', '#FFFFFF')
    root.style.setProperty('--slider-color', '#FFFFFF')
    root.style.setProperty('--icon-color', '#C4C4CC')
    root.style.setProperty('--icon-color-selected', '#FFFFFF')
    root.style.setProperty('--card-color', '#29292E')
    root.style.setProperty('--card-color-selected', '#0A3442')
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
  })
  
  buttonDarkMode.addEventListener('click', function() {
    root.style.setProperty('--bg-color', '#FFFFFF')
    root.style.setProperty('--text-color', 'hsl(240, 6%, 21%)')
    root.style.setProperty('--slider-color', 'hsl(240, 6%, 21%)')
    root.style.setProperty('--icon-color', 'hsl(240, 6%, 21%)')
    root.style.setProperty('--icon-color-selected', '#FFFFFF')
    root.style.setProperty('--card-color', 'hsl(240, 9%, 89%)')
    root.style.setProperty('--card-color-selected', 'hsl(194, 97%, 31%)')
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
  })
  
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    buttonPlay.setAttribute("disabled", true)
  })
  
  buttonStop.addEventListener('click', function() {
    timer.hold()
    buttonPlay.removeAttribute("disabled")
  })
  
  buttonIncreaseTime.addEventListener('click', function() {
    let NewMinutes = Number(minutesDisplay.textContent)+5
    if (NewMinutes<=99) {
      minutesDisplay.textContent = String(NewMinutes).padStart(2, "0")
    } else {
      minutesDisplay.textContent = "99"
      secondsDisplay.textContent = "59"
    }
  })
  
  buttonDecreaseTime.addEventListener('click', function() {
    let NewMinutes = Number(minutesDisplay.textContent)-5
    if (NewMinutes>=0) {
      minutesDisplay.textContent = String(NewMinutes).padStart(2, "0")
    } else {
      minutesDisplay.textContent = "00"
      secondsDisplay.textContent = "00"
    }
  })
  
  buttonForestSound.addEventListener('click', function() {
    sound.toogleAudioButton(buttonForestSound,sound.forest,forestVolume)
  })
  
  buttonRainSound.addEventListener('click', function() {
    sound.toogleAudioButton(buttonRainSound,sound.rain,rainVolume)
  })
  
  buttonCafeteriaSound.addEventListener('click', function() {
    sound.toogleAudioButton(buttonCafeteriaSound,sound.cafeteria,cafeteriaVolume)
  })
  
  buttonFireplaceSound.addEventListener('click', function() {
    sound.toogleAudioButton(buttonFireplaceSound,sound.fireplace,fireplaceVolume)
  })
  
  forestVolume.addEventListener('input', function(){
    sound.forest.volume = forestVolume.value
  })
  
  rainVolume.addEventListener('input', function(){
    sound.rain.volume = rainVolume.value
  })
  
  cafeteriaVolume.addEventListener('input', function(){
    sound.cafeteria.volume = cafeteriaVolume.value
  })
  
  fireplaceVolume.addEventListener('input', function(){
    sound.fireplace.volume = fireplaceVolume.value
  })  

}