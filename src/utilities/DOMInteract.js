/**
 * DOM Interaction functions to make the rest of the js look less ugly
 */

/**
 * Creates new child at the bottom of the current element
 * @param {string} element
 * @param {string} newChild
 */
push_child = function(element, newChild) {
	document.querySelector(element).innerHTML += newChild
}

/**
 * Removes an element and its children from the DOM
 * @param {string} element
 */
remove_element = function(element) {
	document.querySelector(element).outerHTML = ""
}

/**
 * Gets an element in case I wanted to do something with it
 * that wasn't done by another function
 * @param {string} element
 * @return {list}
 */
get_element = function(element) {
	return document.querySelectorAll(element)
}

/**
 * Sets text within the specified element
 * @param {string} element
 * @param {string} text
 */
set_text = function(element, text) {
	document.querySelector(element).innerText = text
}

/**
 * Sets background color of an element
 * @param {string} element
 * @param {string} color
 */
set_color = function(element, color) {
	document.querySelector(element).style.backgroundColor = color
}
