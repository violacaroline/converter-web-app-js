/**
 * The main script file of the application.
 *
 * @author Andrea Viola Caroline Åkesson <ca223pw@student.lnu.se>
 * @version 1.0.0
 */
 import './components/navigation.js'
 import './components/wizard.js'

 const container = document.querySelector('#container')
 const navigation = document.createElement('navigation-component')
 const wizard = document.createElement('wizard-component')

 container.appendChild(navigation)
 container.appendChild(wizard)