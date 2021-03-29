const width = 500;
const height = 100;
const barPadding = 2;

const dataset = [14, 5, 26, 23, 9, 4, 20, 1, 8, 22];

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) { return i * (width / dataset.length); })
    .attr("y", function(d) { return height - (d * 4); })
    .attr("width", width / dataset.length - barPadding)
    .attr("height", function(d) { return d * 4; })
    .attr("fill", function(d) { return "rgb(0, 0, " + Math.round(d * 10) + ")"; });