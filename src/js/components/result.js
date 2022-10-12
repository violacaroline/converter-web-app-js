/**
 * The result web component module.
 */
const template = document.createElement('template')
template.innerHTML = `
     <style>
       #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px;
        height: 100px;
        width: 100px;
       }

       h2 {
        color: #107dac;
       }
     </style>
     <div id="container">
      <h2 id="result">Result goes here</h2>
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
  }
)
