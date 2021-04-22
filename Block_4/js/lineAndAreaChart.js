function init() {
    const width = 600;
    const height = 300;

    var dataset;
}

d3.csv("../Unemployment_78-98.csv", function(d) {
    return {
        date: new Date(+d.year, +d.month-1),
        number: +d.number
    };
}).then(function(data) {
    dataset = data;
    lineChart(dataset);
})

console.log(table(dataset, ["date", "number"]));

window.onload(init());