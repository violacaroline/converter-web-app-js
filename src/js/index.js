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

 /* DOCUMENT CONTAINERS */
 const header = document.querySelector('#header')
 const container = document.querySelector('#container')

 /* COMPONENTS */
 const navigation = document.createElement('navigation-component')
 const wizard = document.createElement('wizard-component')
 const wind = document.createElement('wind-component')
 const temp = document.createElement('temp-component')



 header.appendChild(navigation)
 container.appendChild(wizard)

 /* LISTEN TO NAVIGATION EVENTS */
 navigation.addEventListener('returnToHomePage', () => {
  container.replaceChild(wizard, container.firstChild)
 })
 navigation.addEventListener('convertWind', () => {
  container.replaceChild(wind, container.firstChild)
 })
 navigation.addEventListener('convertTemp', () => {
  container.replaceChild(temp, container.firstChild)
 })
 navigation.addEventListener('convertWind', () => {
  container.replaceChild(wind, container.firstChild)
 })
 navigation.addEventListener('convertWind', () => {
  container.replaceChild(wind, container.firstChild)
 })
 navigation.addEventListener('convertWind', () => {
  container.replaceChild(wind, container.firstChild)
 })