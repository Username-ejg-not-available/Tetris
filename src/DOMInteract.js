
push_child = function(element, newChild) {
	document.querySelector(element).innerHTML += newChild
}

remove_element = function(element) {
	document.querySelector(element).outerHTML = ""
}

get_element = function(element) {
	return document.querySelectorAll(element)
}

set_text = function(element, text) {
	document.querySelector(element).innerText = text
}

set_color = function(element, color) {
	document.querySelector(element).style.backgroundColor = color
}
