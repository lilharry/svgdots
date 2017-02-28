
var svgc = document.getElementById("svgcontainer");
svgc.setAttribute("width",500);
svgc.setAttribute("height",500);


var click = function(e){
    c = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle");
    c.setAtrribute("cx",e.clientX);
    c.setAttribute("cy",e.clientY);
    c.setAttribute("r",10);
    svgc.appendChild(c)
}

var clear = function(e){
    while (svgc.lastChild) {
	svgc.removeChild(svgc.lastChild);
    }
}
    

var c = document.getElementById("c")
c.addEventListener("click",clear)
