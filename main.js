const HOURS = document.querySelector('.hours')
const MINUTS = document.querySelector('.minuts')
const SECOND = document.querySelector('.secunds')
const BUTTONSTART = document.querySelector('.buttonStart')
const BUTTONPAUSE = document.querySelector('.buttonPause')
const BUTTONRESET = document.querySelector('.buttonReset')

let hours = 0
let minuts = 0
let seconds = 0
let active = false
let once

const startTimer = () => {
	if (active) {
		return
	}

	active = true
	once = setInterval(() => {
		HOURS.textContent = hours.toString().padStart(2, '0')
		MINUTS.textContent = minuts.toString().padStart(2, '0')
		SECOND.textContent = seconds.toString().padStart(2, '0')

		seconds += 1
		if (seconds === 60) {
			seconds = 0
			minuts += 1
		}

		if (minuts === 60) {
			minuts = 0
			hours += 1
		}
	}, 1000)
}

const stopTimer = () => {
	clearInterval(once)
	active = false
}

const resetTimer = () => {
	HOURS.textContent = '00'
	MINUTS.textContent = '00'
	SECOND.textContent = '00'
	hours = 0
	minuts = 0
	seconds = 0
	active = false
	clearInterval(once)
}

BUTTONSTART.addEventListener('click', startTimer)
BUTTONRESET.addEventListener('click', resetTimer)
BUTTONPAUSE.addEventListener('click', stopTimer)
