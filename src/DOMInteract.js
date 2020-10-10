
push_child = function(element, newChild) {
	document.querySelector(element).innerHTML += newChild
}

remove_element = function(element) {
	document.querySelector(element).outerText = ""
}

get_element = function(element) {
	return document.querySelectorAll(element)
}

set_size = function(element, width = -1, height = -1) {
	if (width > -1) document.querySelector(element).style.width = width
	if (height > -1) document.querySelector(element).style.height = height
}

set_color = function(element, color) {
	document.querySelector(element).style.backgroundColor = color
}
