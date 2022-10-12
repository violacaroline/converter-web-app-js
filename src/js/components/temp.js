import './result.js'
/**
 * The temperature web component module.
 */

const template = document.createElement('template')
template.innerHTML = `
     <style>
       #container {
        display: flex;
        flex-direction: column;
        height: 80vh;
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
        <h1>Convert Temperature...</h1>
         <label for="input-value"></label>
         <input id="input-value" type="text" placeholder="Value" />
         <label for="input-from"></label>
         <input list="temp-values" id="input-from" type="text" placeholder="From" />
         <datalist id="temp-values">
           <option value="Fahrenheit">
           <option value="Celsius">
         </datalist>
         <label for="input-to"></label>
         <input list="wind-values" id="input-to" type="text" placeholder="To"/>
         <datalist id="wind-values">
           <option value="Fahrenheit">
           <option value="Celsius">
         </datalist>
         <button id="convert-btn">Convert!</button>
       </form>
       <result-component></result-component>
     </div>
   `

customElements.define('temp-component',
  /**
   * Represents the temp element.
   */
  class extends HTMLElement {
    #inputValue

    #inputFrom

    #inputTo

    #convertBtn

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
      this.#inputValue = this.shadowRoot.querySelector('#input-value')
      this.#inputFrom = this.shadowRoot.querySelector('#input-from')
      this.#inputTo = this.shadowRoot.querySelector('#input-to')
      this.#convertBtn = this.shadowRoot.querySelector('#convert-btn')
    }
  }
)
