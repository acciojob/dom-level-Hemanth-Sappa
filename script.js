//your JS code here. If required.
let liItem = document.getElementsById("level");
let n;
let list = document.getElementsByTagName("li");

for(let i=0; i<list.length; i++) {
	if(list[i].innertext === liItem.innertext) {
		n = i;
		break;
	}
}

alert(n);
