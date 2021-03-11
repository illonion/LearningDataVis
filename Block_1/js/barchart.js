const width = 600
const height = 400;
const barPadding = 3;

let dataset = [14, 5, 26, 23, 9, 2, 7, 100, 24, 56, 45, 20];
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d,i) {
        return i * (width / dataset.length);
    })
    .attr("y", 0)
    .attr("width", (width / dataset.length) - barPadding)
    .attr("height", function(d, i) {
        return dataset.TestData * 4;
    });


const bars = document.getElementsByTagName("rect");
const noOfBars = bars.length;
console.log(noOfBars);

for (var i = 0; i < noOfBars; i++) {
    if (bars[i].getAttribute("height") > 20) {
        bars[i].style.backgroundColor = "red";
    }
}