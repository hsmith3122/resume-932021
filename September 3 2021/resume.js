var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");

setBodyBackground();

function setBodyBackground(){
    
    let sidebarColor = window.getComputedStyle(sidebar).backgroundColor;
    let mainColor = window.getComputedStyle(main).backgroundColor;
    var sbcols = sidebarColor.substring(4, sidebarColor.length - 1).split(/,\s*/);
    var mcols = mainColor.substring(4, mainColor.length - 1).split(/,\s*/);
    var halfcols = [
        ((parseInt(sbcols[0]) + parseInt(mcols[0])) / 2),
        ((parseInt(sbcols[1]) + parseInt(mcols[1])) / 2),
        ((parseInt(sbcols[2]) + parseInt(mcols[2])) / 2),
    ]
    document.body.style.backgroundColor = "rgb(" + halfcols[0] + ", " + halfcols[1] + ", " + halfcols[2] + ")";

}

function printResume(){
    
}