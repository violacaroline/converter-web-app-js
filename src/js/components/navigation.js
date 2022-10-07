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

    #header {
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
      <h1 id="header">What do you want to convert ...</h1> 
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
      // REMOVE WHEN CREATED NEW ONES - this.inputField = this.shadowRoot.querySelector('#input-name')

    }
  }
)