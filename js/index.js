import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const sound = Sound()

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
})

Events({sound, timer})