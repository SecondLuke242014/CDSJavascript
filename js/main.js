const CDS = {}

CDS.getClass = function(name) {
  return document.querySelector("."+name)
}

CDS.getId = function(name) {
  return document.querySelector("#"+name)
}
