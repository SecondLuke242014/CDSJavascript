var css = {}

css.showElementById = function(idName) {
  document.querySelector('#'+idName).style.visibility = 'visible'
}

css.hideElementById = function(idName) {
  document.querySelector('#'+idName).style.visibility = 'hidden'
}

css.showElementByClassName = function(className) {
  document.querySelector('.'+className).style.visibility = 'visible'
}

css.hideElementByClassName = function(className) {
  document.querySelector('.'+className).style.visibility = 'hidden'
}

css.makeElementBlock = function(classOrIdSelector) {
  document.querySelector(classOrIdSelector).style.display = 'block'
}
