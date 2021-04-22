const width = 700;
const height = 250;
const maxValue = 25;

let dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

const xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, width])
    .paddingInner(0.05);

const yScale = d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .rangeRound([0, height])

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {return xScale(i);})
    .attr("y", function(d) { return height - yScale(d); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return yScale(d); })
    .attr("fill", "grey")
    .on("mouseover", function(d) {
        var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.bandwidth()/2;
        var yPosition = parseFloat(d3.select(this).attr("y")) + 20;

        d3.select(this)
            .attr("fill", "orange");
        
        var tooltips = svg.append("text")
            .attr("id", "tooltip")
            .attr("x", xPosition)
            .attr("y", yPosition)
            .attr("text-anchor", "middle")
            .text(d)
            
    })
    .on("mouseout", function() {
        d3.select(this)
            .attr("fill", "grey");
        
        d3.select("#tooltip").remove();

    });

d3.select("#addData")
    .on("click", function() {

        dataset.push(Math.floor(Math.random() * maxValue));
        xScale.domain(d3.range(dataset.length));
        
        const bars = svg.selectAll("rect")
            .data(dataset);

        bars.enter()
            .append("rect")
            .attr("x", width)
            .attr("y", function(d) {return height - yScale(d);})
            .merge(bars)
            .transition()
            .duration(500)
            .attr("x", function(d, i) {return xScale(i);})
            .attr("y", function(d) { return height - yScale(d); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return yScale(d); })
            .attr("fill", "grey");

        bars.on("mouseover", function(d) {
            var xPosition = parseFloat(d3.select(this).attr("x"));
            var yPosition = parseFloat(d3.select(this).attr("y"));
    
            d3.select(this)
                .attr("fill", "orange");
            
            tooltips = svg.append("text")
                .attr("id", "tooltip")
                .attr("x", xPosition + (xScale.bandwidth() / 4))
                .attr("y", yPosition + 20)
                .text(d)
            })
            .on("mouseout", function() {
                d3.select(this)
                    .attr("fill", "grey");
                
                d3.select("#tooltip").remove();
            });
    })

d3.select("#removeData")
    .on("click", function() {

        dataset.shift();

        const bars = svg.selectAll("rect")
            .data(dataset);

        bars.exit()
            .transition()
            .duration(500)
            .attr("x", width)
            .remove();
    })