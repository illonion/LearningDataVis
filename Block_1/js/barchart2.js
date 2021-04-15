const w = 500;
const h = 100;
const barPadding = 3;

var dataset = [14, 5, 26, 23, 9, 2, 7, 20, 30, 0, 4, 20];

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {return i * (w / dataset.length)})
    .attr("y", function(d) { return h - (d * 4); })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) { return d * 4; })
    .attr("fill", function(d) { return "rgb(0, 0, " + Math.round(d * 10) + ")"; });
