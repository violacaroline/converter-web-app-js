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
  result.setAttribute('result', event.detail)
  container.appendChild(result)
 })

 temp.addEventListener('convert', (event) => {
  result.setAttribute('result', event.detail)
  container.appendChild(result)
 })
