/**
 * The navigation web component module
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #container {
      display: grid;
      white-space: nowrap;
      grid-template-columns: repeat(2, 1fr);
      padding: 2%;
      border-bottom: 1px solid lightgrey;
    }

    #button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    #header-container {
      color: #107dac;
    }

    h1:hover {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: #107dac;
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
    <div id="header-container">
      <h1 id="wizard-header"><a>THE WIZARD &#129497</a></h1>
      <h2>What do you want to convert ...</h2> 
    </div>
    <div id="button-container">
      <button id="wind-btn">Wind</button>
      <button id="temperature-btn">Temperature</button> 
      <button id="distance-btn">Distance</button> 
      <button id="weight-btn">Weight</button> 
      <button id="volume-btn">Volume</button>
    </div>
  </div>
`

customElements.define('navigation-component',
  /**
   * Represents the navigation element.
   */
  class extends HTMLElement {
    /**
     * Element representing the wizard header.
     */
    #wizardHeader

    /**
     * Element representing available buttons for certain types of conversion.
     */
    #windButton
    #tempButton
    #distanceButton
    #weightButton
    #volumeButton

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
      this.#wizardHeader = this.shadowRoot.querySelector('#wizard-header')
      this.#windButton = this.shadowRoot.querySelector('#wind-btn')
      this.#tempButton = this.shadowRoot.querySelector('#temperature-btn')
      this.#distanceButton = this.shadowRoot.querySelector('#distance-btn')
      this.#weightButton = this.shadowRoot.querySelector('#weight-btn')
      this.#volumeButton = this.shadowRoot.querySelector('#volume-btn')
    }

    /**
     * Called when element is inserted to the DOM.
     *
     */
     connectedCallback () {
      /**
       * User clicking on Wizard header, return to home page.
       */
      this.#wizardHeader.addEventListener('click', () => {
        console.log('Clicked the wizard')
        const returnToHomePage = new window.CustomEvent('returnToHomePage')
        this.dispatchEvent(returnToHomePage)
      })

      /**
       * User choosing type of conversion events.
       */
      this.#windButton.addEventListener('click', () => {
        console.log('Clicked the wind button')
        const convertWind = new window.CustomEvent('convertWind')
        this.dispatchEvent(convertWind)
      })
      this.#tempButton.addEventListener('click', () => {
        console.log('Clicked the temp button')
        const convertTemp = new window.CustomEvent('convertTemp')
        this.dispatchEvent(convertTemp)
      })
      this.#distanceButton.addEventListener('click', () => {
        console.log('Clicked the distance button')
        const convertDistance = new window.CustomEvent('convertDistance')
        this.dispatchEvent(convertDistance)
      })
      this.#weightButton.addEventListener('click', () => {
        console.log('Clicked the weight button')
        const convertWeight = new window.CustomEvent('convertWeight')
        this.dispatchEvent(convertWeight)
      })
      this.#volumeButton.addEventListener('click', () => {
        console.log('Clicked the volume button')
        const convertvolume = new window.CustomEvent('convertVolume')
        this.dispatchEvent(convertvolume)
      })      
    }
  }
)