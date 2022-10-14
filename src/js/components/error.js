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
       <h3>Sorry, an error has occurred. Did you fill out all options above?</h3>
      </div>
    `

customElements.define('error-component',
  /**
   * Represents the error element.
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
    }
  }
)