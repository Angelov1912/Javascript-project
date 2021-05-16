//Hide an element when the X button is clicked
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Create list items when the user click the add button

document.querySelector(".addButton").onclick = function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);

	li.appendChild(t);
	if (inputValue === '') {
	  alert("Please write your item and click Move to the list");
	} else {
	  document.querySelector(".myUl").append(li);
	};
	document.getElementById("myInput").value = "";
  
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
  
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  };
	};
  };

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);






