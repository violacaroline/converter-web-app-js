/**
 * The main script file of the application.
 *
 * @author Andrea Viola Caroline Åkesson <ca223pw@student.lnu.se>
 * @version 1.0.0
 */
import './components/navigation.js'
import './components/wizard.js'
import './components/wind.js'
import './components/temp.js'
import './components/distance.js'
import './components/weight.js'
import './components/volume.js'
import './components/result.js'
import './components/error.js'

/* DOCUMENT CONTAINERS */
const header = document.querySelector('#header')
const container = document.querySelector('#container')

/* COMPONENTS */
const navigation = document.createElement('navigation-component')
const wizard = document.createElement('wizard-component')
const wind = document.createElement('wind-component')
const temp = document.createElement('temp-component')
const distance = document.createElement('distance-component')
const weight = document.createElement('weight-component')
const volume = document.createElement('volume-component')
const result = document.createElement('result-component')
const error = document.createElement('error-component')

header.appendChild(navigation)
container.appendChild(wizard)

/* LISTEN TO NAVIGATION EVENTS */
navigation.addEventListener('returnToHomePage', () => {
  container.replaceChildren(wizard)
})

navigation.addEventListener('convertWind', () => {
  container.replaceChildren(wind)
})

navigation.addEventListener('convertTemp', () => {
  container.replaceChildren(temp)
})

navigation.addEventListener('convertDistance', () => {
  container.replaceChildren(distance)
})

navigation.addEventListener('convertWeight', () => {
  container.replaceChildren(weight)
})

navigation.addEventListener('convertVolume', () => {
  container.replaceChildren(volume)
})

/* LISTEN TO CONVERT EVENTS */
wind.addEventListener('convert', (event) => {
  resultExists()
  validateEventObject(event, result, error)
})

temp.addEventListener('convert', (event) => {
  resultExists()
  validateEventObject(event, result, error)
})

distance.addEventListener('convert', (event) => {
  resultExists()
  validateEventObject(event, result, error)
})

weight.addEventListener('convert', (event) => {
  resultExists()
  validateEventObject(event, result, error)
})

volume.addEventListener('convert', (event) => {
  resultExists()
  validateEventObject(event, result, error)
})

/**
  * Validate that event.detail contains converted value, display error element if null.
  */
function validateEventObject (eventObject, result, error) {
  if (eventObject.detail) {
    if (container.querySelector('#error')) {
      error.remove()
      result.setAttribute('id', 'result')
      result.setAttribute('result', eventObject.detail)
      container.appendChild(result)
    }
    result.setAttribute('result', eventObject.detail)
    container.appendChild(result)
  } else {
    container.appendChild(error)
    error.setAttribute('id', 'error')
  }
}

/**
  * Check if result element already exists.
  */
 function resultExists () {
  if (container.querySelector('#result')) {
    result.remove()
  }
}


