app.controller("splatCtrl", function($scope) {

  var width = 50;
  var height = 50;

var splat = function(){
  d3.selectAll("svg").remove();

  for (var j = 0; j < 1000; j++) {
    var svg = d3.select("splat")
      .append("svg")
      .attr("width", width)
      .attr("height", height);


    var line = d3.svg.line()
        .x(function(d) {
          return Math.random() * width;
        })
        .y(function(d) {
          return Math.random() * height;
        });

    var array = []; //determining total line count and total bends of each line
    for (var i = 0; i < (Math.random()*10)+10; i++) {
      array.push(1);
    }



    svg.selectAll("path")
        .data(array)
        .enter()
        .append("path")
        .attr("d", function() {
          return line(array);
        })
        .attr("class", "line")
        .style("stroke", function(d,i) {
          return d3.hsl(Math.random() * 360, 0.5, 0.5);
        })
        .style("stroke-width", function(d,i) {
          return Math.random()*5;
        })
        .attr('fill', 'none');
  }
}
splat();
setInterval(function(){
  splat();
},2000);
});
