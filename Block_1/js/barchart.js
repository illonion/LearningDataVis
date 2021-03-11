const bars = document.getElementsByTagName("rect");
const noOfBars = bars.length;
console.log(noOfBars);

for (var i = 0; i < noOfBars; i++) {
    if (bars[i].getAttribute("height") > 20) {
        bars[i].style.backgroundColor = "red";
    }
}