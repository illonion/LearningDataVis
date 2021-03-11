const width = 600
const height = 400;
const barPadding = 3;
var dataset = [];

d3.csv("Task17.csv").then(function(data) {
    dataset = data
    console.log(dataset);
    barChart(dataset);
})

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    function barChart() {
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
                return d.TestData * 4;
            })
            .attr("fill", function(d) {
                return "rgb(100, 100, " + Math.round(d.TestData * 10) +  ")"
            })
    }