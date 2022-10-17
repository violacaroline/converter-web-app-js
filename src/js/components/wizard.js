/**
 * The wizard web component module
 *
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

     h1 {
      font-size: 2em;
      color: #107dac;
     }

     p {
      font-size: 1.6em;
      color: #107dac;
      width: 30%;
     }
 
 
   </style>
   <div id="container">
   <h1>THE WIZARD &#129497</h1>
   <p>The wizard helps you convert a selection of the most common units, select from the types above!</p>
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

    }
  }
)
