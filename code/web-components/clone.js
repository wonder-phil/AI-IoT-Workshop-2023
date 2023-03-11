class AttachToMe extends HTMLElement {
	
	static count = 0;
	
	constructor() {
		super();

		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild('myList');
	  }
  
	static appendFunction() {
		
		const node = document.createElement("li");
		var last_two_digits;
		if (1 == AttachToMe.count.toString().length) {
			last_two_digits = "0" + AttachToMe.count.toString();
		} else {
			last_two_digits = AttachToMe.count.toString();
		}
		const textnode = document.createTextNode("20" + last_two_digits + "!");
		AttachToMe.count += 1;
		node.appendChild(textnode);
		document.getElementById("myList").appendChild(node);
		
		if (last_two_digits == 23) {
			alert("Yeah!");
		}
	}
  
}