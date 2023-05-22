export default function() {
  
  const forest = new Audio("./audio/Floresta.wav")
  const rain = new Audio("./audio/Chuva.wav")
  const cafeteria = new Audio("./audio/Cafeteria.wav")
  const fireplace = new Audio("./audio/Lareira.wav")

  forest.loop = true
  rain.loop = true
  cafeteria.loop = true
  fireplace.loop = true

  function toogleAudioButton(button,audio,slider) {
    if (button.classList.contains('selected')) {
      button.classList.remove('selected')
      slider.classList.remove('selected')
      audio.pause()
    } else {
      button.classList.add('selected')
      slider.classList.add('selected')
      audio.play()
    }
  }

  return {
    toogleAudioButton,
    forest,
    rain,
    cafeteria,
    fireplace
  }

}