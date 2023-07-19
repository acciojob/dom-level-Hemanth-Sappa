//your JS code here. If required.
let liItem = document.getElementById("level");
let n;
let list = document.getElementByTagName("li");

for(let i=0; i<list.length; i++) {
	if(list[i].innertext === liItem.innertext) {
		n = i;
	}
}

alert();
