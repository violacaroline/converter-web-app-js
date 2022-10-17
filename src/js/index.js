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

/* LISTEN TO CONVERT EVENTS/ERRORS */

/* --- WIND --- */
wind.addEventListener('convert', (event) => {
  removeOldErrorElement()
  removeOldResultElement()
  displayResult(event, result)
})
wind.addEventListener('conversion-error', (event) => {
  removeOldResultElement()
  error.setAttribute('error-message', event.detail)
  container.appendChild(error)
})

/* --- TEMPERATURE --- */
temp.addEventListener('convert', (event) => {
  removeOldErrorElement()
  removeOldResultElement()
  displayResult(event, result)
})
temp.addEventListener('conversion-error', (event) => {
  removeOldResultElement()
  error.setAttribute('error-message', event.detail)
  container.appendChild(error)
})

/* --- DISTANCE --- */
distance.addEventListener('convert', (event) => {
  removeOldErrorElement()
  removeOldResultElement()
  displayResult(event, result)
})
distance.addEventListener('conversion-error', (event) => {
  removeOldResultElement()
  error.setAttribute('error-message', event.detail)
  container.appendChild(error)
})

/* --- WEIGHT --- */
weight.addEventListener('convert', (event) => {
  removeOldErrorElement()
  removeOldResultElement()
  displayResult(event, result)
})
weight.addEventListener('conversion-error', (event) => {
  removeOldResultElement()
  error.setAttribute('error-message', event.detail)
  container.appendChild(error)
})

/* --- VOLUME --- */
volume.addEventListener('convert', (event) => {
  removeOldErrorElement()
  removeOldResultElement()
  displayResult(event, result)
})
volume.addEventListener('conversion-error', (event) => {
  removeOldResultElement()
  error.setAttribute('error-message', event.detail)
  container.appendChild(error)
})

/**
  * Display result.
  */
function displayResult (eventObject, result) {
  result.setAttribute('result', eventObject.detail)
  container.appendChild(result)
}

/**
 * If old result exists, remove it.
 */
function removeOldResultElement () {
  if (container.contains(result)) {
    result.remove()
  }
}

/**
 * If old error exists, remove it.
 */
function removeOldErrorElement () {
  if (container.contains(error)) {
    error.remove()
  }
}
