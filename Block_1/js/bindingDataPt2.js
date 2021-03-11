var body = d3.select("body");            
            
// Example 2
var dataset = [14, 5, 26, 23, 9];
body.selectAll("p")
    .data(dataset) 
    .enter() // Creates a new placeholder element for each bit of data
    .append("p") // Appends a p element to match each placeholder
    .text(function(d, i) {
        if (d > 10) {
            return "Warning: Joe watched " + d + " cat videos today.";
        } else {
            return "Joe watched " + d + " cat videos today.";
        }
    });

const Paras = document.getElementsByTagName("p");
const noOfParas = Paras.length;

for (i = 0; i < noOfParas; i++) {
    if (Paras[i].textContent.includes("Warning") == true) {
        Paras[i].style.color = "red";
    }
}