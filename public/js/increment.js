
document.getElementById("select").onchange = function(){
  this.setAttribute("data-check",(parseInt(this.getAttribute("data-check"))+1))
  document.getElementById("data-check-show").innerHTML = this.getAttribute("data-check");
}
