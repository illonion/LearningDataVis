const width = 300;
const height = 300;
const outerRadius = width / 2;
const innerRadius = 0;
var dataset = [2, 7, 6, 10, 2, 4]

var arc = d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

var pie = d3.pie();

var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

    var arcs = svg.selectAll("g.arc")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

arcs.append("path")
    .attr("fill", function(d, i) {
        return color(i);
    })
    .attr("d", arc);

arcs.append("text")
    .text(function(d) {
        return d.value;
    }).attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";
    })