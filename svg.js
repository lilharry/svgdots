
var svgc = document.getElementById("svgcontainer");

var firstPoint = true;
var lastX = 0;
var lastY = 0;

function makeCircle(x, y, r){

    //circle
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",r);

    c.setAttribute("stroke-width","1");
    c.setAttribute("fill","red");
    svgc.appendChild(c);

    //line
    if (firstPoint){
        firstPoint = false;
    }else{
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",lastX);
        line.setAttribute("y1",lastY);
        line.setAttribute("x2",x);
        line.setAttribute("y2",y);
        line.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1");
        svgc.appendChild(line);
    }
    lastX = x
    lastY = y

    
    
};

var clear = function(e){
    while (svgc.lastChild) {
	svgc.removeChild(svgc.lastChild);
    }
}
    

var c = document.getElementById("c")
c.addEventListener("click",clear)

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return [event.clientX - rect.left,event.clientY - rect.top]

};

svgc.addEventListener('click', function(e){
    var mousePos = getMousePos(svgc, e);
    makeCircle(mousePos[0], mousePos[1], 10);
                                        }, false);