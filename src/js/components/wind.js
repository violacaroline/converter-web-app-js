import './result.js'
import Wizard from '@violacaroline/wizard'
/**
 * The wind web component module.
 */

const template = document.createElement('template')
template.innerHTML = `
    <style>
      #container {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
      }

      form {
        text-align: center;
      }
 
      h1 {
       font-size: 2em;
       color: #107dac;
      }

      input {
        display: block;
        margin: 10%;
        padding: 5%;
      }

      button {
      background-color: #107dac;
      color: white;
      border: none;
      margin: 10px;
      padding: 10px;
      border-radius: 10px; 
    }

    button:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      cursor: pointer;
    }
  
    </style>
    <div id="container">      
      <form action="">
      <h1>Convert wind ...</h1>
        <label for="input-value">Value</label>
        <input id="input-value" type="text" placeholder="Value" />
        <label for="input-from">From</label>
        <input list="wind-values" id="input-from" type="text" placeholder="From" />
        <datalist id="wind-values">
          <option value="Kilometer per hour">
          <option value="Meter per second">
          <option value="Feet per second">
          <option value="Miles per hour">
          <option value="Knots">
        </datalist>
        <label for="input-to">To</label>
        <input list="wind-values" id="input-to" type="text" placeholder="To"/>      
        <button id="convert-btn">Convert!</button>
      </form>
    </div>
  `

customElements.define('wind-component',
  /**
   * Represents the wind element.
   */
  class extends HTMLElement {
    #container

    #inputValue

    #inputFrom

    #inputTo

    #convertBtn

    #result

    #wizard = new Wizard()

    /**
      * Creates an instance of the current type.
      *
      */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get necessary elements in shadowroot.
      this.#container = this.shadowRoot.querySelector('#container')
      this.#inputValue = this.shadowRoot.querySelector('#input-value')
      this.#inputFrom = this.shadowRoot.querySelector('#input-from')
      this.#inputTo = this.shadowRoot.querySelector('#input-to')
      this.#convertBtn = this.shadowRoot.querySelector('#convert-btn')
    }

    /**
      * Called when element is inserted to the DOM.
      *
      */
    connectedCallback () {

      this.#convertBtn.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Clicked the convert button')

        console.log('From', this.formatUnitType(this.#container.querySelector('#input-from').value))
        console.log('To', this.formatUnitType(this.#container.querySelector('#input-to').value))
        console.log('Value', this.#container.querySelector('#input-value').value)

        const options = {
          fromUnit: this.formatUnitType(this.#container.querySelector('#input-from').value),
          toUnit: this.formatUnitType(this.#container.querySelector('#input-to').value),
          value: this.#container.querySelector('#input-value').value
        }

        console.log('Result: ', this.#wizard.convertWind(options))

        const convert = new window.CustomEvent('convert', {
          detail: this.#wizard.convertWind(options)
        })
        this.dispatchEvent(convert)
      })
    }

    /**
     * Format the user input to the correct.
     *
     * @param {string} unitTypeText - The type of unit in text format.
     * @return {string} - The unit in the option format for wizard. 
     */
    formatUnitType (unitTypeText) {
      switch (unitTypeText) {
        case 'Kilometer per hour':
          return 'kmh'
        case 'Meter per second':
          return 'ms'
        case 'Feet per second':
          return 'fts'
        case 'Miles per hour':
          return 'mph'
        case 'Knots':
          return 'knots'
        default:
          return ''
      }
    }
  }
)
