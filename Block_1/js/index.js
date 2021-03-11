const naplanResults2011 = document.getElementById("naplanResults2011");
const naplanResults2017 = document.getElementById("naplanResults2017");

function openFigure2011closeFigure2017() {
    naplanResults2011.classList.add("active");
    naplanResults2017.classList.remove("active");
}

function openFigure2017closeFigure2011() {
    naplanResults2011.classList.remove("active");
    naplanResults2017.classList.add("active");
}