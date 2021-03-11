const width = 600
const height = 100;
const textHDistance = 7;
const textVDistance = 5;

let dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 880]];
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return d[0];
    })
    .attr("cy", function(d) {
        return d[1];
    })
    .attr("r", 5)
    .attr("sill", "slategrey");

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function(d, i) {
        return d[0] + textHDistance;
    })
    .attr("y", function(d, i) {
        return d[1] + textVDistance;
    });