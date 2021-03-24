const width = 500
const height = 600;
const textHDistance = 7;
const textVDistance = 5;
const padding = 20;

let dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 20], [475, 44], [25, 67], [85, 21], [220, 88]];
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var xScale = d3.scaleLinear()
    .domain([d3.min(dataset, function(d) {
        return d[0];
    }),
    d3.max(dataset, function(d) {
        return d[0];
    })])
    .range([padding, width - padding * 4]);

var yScale = d3.scaleLinear()
    .domain([d3.min(dataset, function(d) {
        return d[1];
    }),
    d3.max(dataset, function(d) {
        return d[1];
    })])
    .range([height - padding, padding]);

var xAxis = d3.axisBottom().scale(xScale);

svg.append("g").attr("transform", "translate(0, " + (height - padding)  + ")").call(xAxis);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return xScale(d[0]);
    })
    .attr("cy", function(d) {
        return yScale(d[1]);
    })
    .attr("r", 5)
    .attr("fill", "slategrey");

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function(d, i) {
        return xScale(d[0]) + textHDistance;
    })
    .attr("y", function(d, i) {
        return yScale(d[1]) + textVDistance;
    });