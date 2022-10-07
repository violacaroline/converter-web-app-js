/**
 * The wizard web component module
 *
 */

const template = document.createElement('template')
template.innerHTML = `
   <style>
     #container {
      display: flex;
      height: 80vh;
      align-items: center;
      justify-content: center;
     }

     h1 {
      font-size: 2em;
      color: #107dac;
     }
 
 
   </style>
   <div id="container">
   <h1>THE WIZARD &#129497</h1>
   </div>
 `

customElements.define('wizard-component',
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