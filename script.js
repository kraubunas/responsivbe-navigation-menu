"use strict"

var anchors = document.getElementsByTagName("a")
var burger = document.getElementById("burger")
var currentLocation = location.href
var menuLength = anchors.length


burger.addEventListener("click", function () {
    for (var x of anchors) {
        x.classList.toggle("block")
    }
    this.classList.toggle("rotateZ")
    console.log(this)
})

for (let i = 0; i < menuLength; i++) {
    if (anchors[i].href === currentLocation) {
        anchors[i].className = "selected";
    }
}