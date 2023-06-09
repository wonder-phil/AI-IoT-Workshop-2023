// Create a class for the element
class Square extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ['c', 'l']; // Color and Length
  }

  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    console.log('Custom square element added to page.');
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    updateStyle(this);
  }
  
  hide() {
	console.log('Custom square element HIDE.');
  }
  
    
  show() {
	console.log('Custom square element SHOW.');
  }
   
}

customElements.define('custom-square', Square);


function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}


/*
 *
  Main Program
 *
 */


let square;

const add = document.querySelector('.add');
const remove = document.querySelector('.remove');

add.disabled = false;
remove.disabled = true;


add.onclick = function() {
  // Create a custom square element
  square = document.createElement('custom-square');
  square.setAttribute('l', '100');
  square.setAttribute('c', 'red');
  
  document.body.appendChild(square);

  remove.disabled = false;
  add.disabled = true;
};

remove.onclick = function() {
  // Remove the square
  document.body.removeChild(square);

  remove.disabled = true;
  add.disabled = false;
};

