/**
 * The error web component module.
 */
const template = document.createElement('template')
template.innerHTML = `
      <style>
        #error {
         color: red;
         text-align: center;
        }
      </style>
      <div id="error">
       <h3 id="error-message">Sorry, an error has occurred. Did you fill out the options correctly above?</h3>
      </div>
    `

customElements.define('error-component',
  /**
   * Represents the error element.
   */
  class extends HTMLElement {
    #errorMessage

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
      this.#errorMessage = this.shadowRoot.querySelector('#error-message')
    }

    /**
     * Called when inserted in the DOM.
     */
    connectedCallback () {
      if (this.getAttribute('error-message')) {
        this.#errorMessage.textContent = this.getAttribute('error-message')
      }
    }

    /**
     * Called when removed from the DOM.
     */
    disconnectedCallback () {
      this.#errorMessage.textContent = ''
    }
  }
)