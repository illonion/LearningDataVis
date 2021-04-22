var w = 500;
var h = 300;

var projection = d3.geoMercator()
    .center([145, -36.5])
    .translate([w/2, h/2])
    .scale(2450);
var path = d3.geoPath().projection(projection);
var color = d3.scaleQuantize().range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"]);

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "grey");

d3.csv("resources/VIC_LGA_unemployment.csv", function(data){
    color.domain([
        d3.min(data, function(d) { return d.value; }), 
        d3.max(data, function(d) { return d.value; })
    ]);

    d3.json("resources/LGA_VIC.json").then(function(json) {
        for (var i = 0; i < data.length; i++) {
            var LGA = data[i].LGA;
            var unemployed = data[i].unemployed;
            console.log(LGA);
            console.log(unemployed);

            for (j = 0; k < json.features.length; j++) {
                var jsonLGA = json.features[j].properties.name;

                if (LGA == jsonLGA) {
                    json.features[j].properties.value = unemployed;
                    break;
                }
            }
        }

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", function(d) {
                var value = d.properties.value;
                if (value) {
                    return color(value);
                } else {
                    return "#ccc";
                }
            });
    });
});