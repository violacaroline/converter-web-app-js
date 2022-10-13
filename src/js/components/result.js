/**
 * The result web component module.
 */
const template = document.createElement('template')
template.innerHTML = `
     <style>
       #container {
        color: #107dac;
        text-align: center;
       }
     </style>
     <div id="container">
      <h3>Converted Value:</h3><h4 id="result"></h4>
     </div>
   `

customElements.define('result-component',
  /**
   * Represents the result element.
   */
  class extends HTMLElement {
    /**
     * Displays the result.
     */
    #result

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
      this.#result = this.shadowRoot.querySelector('#result')
     }

     /**
      * Called when inserted in the DOM.
      */
     connectedCallback() {
      if (this.getAttribute('result')) {
        this.#result.textContent = this.getAttribute('result')
      }
     }
     
  }
)
