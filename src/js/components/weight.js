import './result.js'
/**
 * The weight web component module.
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
 
       select {
        display: block;
        margin: 5%;
        padding: 2%;
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
        <h1>Convert weight ...</h1>
         <label for="input-value"></label>
         <input id="input-value" type="text" placeholder="Value" />
         <label for="input-from"></label>
         <input list="weight-values-from" id="input-from" type="text" placeholder="From" />
         <datalist id="weight-values-from">
           <option value="Ounces">
           <option value="Pounds">
         </datalist>
         <label for="input-to"></label>
         <input list="weight-values-to" id="input-to" type="text" placeholder="To"/>
         <datalist id="weight-values-to">
           <option value="Grams">
           <option value="Kilograms">
         </datalist>
         <button id="convert-btn">Convert!</button>
       </form>
       <result-component></result-component>
     </div>
   `
 
 customElements.define('weight-component',
   /**
    * Represents the weight element.
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
 