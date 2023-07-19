//your JS code here. If required.
let liItem = document.getElementById("level");
let n;
let list = document.getElementsByTagName("li");

for(let i=0; i<list.length; i++) {
	if(list[i].id === liItem.id) {
		n = i;
	
	}
}

alert(n);  
