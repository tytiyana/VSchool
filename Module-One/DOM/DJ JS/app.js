var box = document.getElementById("square")
 box.addEventListener("mouseover", function hover(){
    box.style.backgroundColor = "blue";
}
)

var box = document.getElementById("square")
 box.addEventListener("mousedown", function heldDown(){
    box.style.backgroundColor = "red";
}
)

var box = document.getElementById("square")
 box.addEventListener("mouseup", function letGo(){
    box.style.backgroundColor = "yellow";
}
)

var box = document.getElementById("square")
 box.addEventListener("dblclick", function dblClick(){
    box.style.backgroundColor = "green";
}
)

var bodies = document.getElementById("all")
 bodies.addEventListener("wheel", function scroll(){
    box.style.backgroundColor = "orange";
}
)

document.addEventListener("keydown", function(e) {
    console.log(e.key) 
    if(e.key === "r") {
        box.style.backgroundColor = "red";
    } else if (e.key === "b") {
        box.style.backgroundColor = "blue"
    }
  })

