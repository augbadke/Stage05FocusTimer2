import {buttonPlay} from "./elements.js"

export default function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
}) {

  let timerTimeOut


  function countdown(){
    timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    if (isFinished) {
      buttonPlay.removeAttribute("disabled")
      return
    }


    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds-1).padStart(2, "0")

    countdown()
  }, 1000)
}

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    hold
  }
}