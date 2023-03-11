// Create a class for the element
class WordCount extends HTMLElement {
  constructor() {
    super();

	var count = 0;
    const shadow = this.attachShadow({mode: 'open'});

    const text = document.createElement('span');
    text.textContent = count.toString();
    shadow.appendChild(text);

    setInterval(function() {
      text.textContent = count.toString();
	  count = count+1;
    }, 200);
  }
  
}

// Define the new element
customElements.define('timer-count', WordCount);
