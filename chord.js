// From http://mkweb.bcgsc.ca/circos/guide/tables/
var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix([
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1086,792,1699,2968,1570,545,4927,359,1674,573,1004,737,3051,3260]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,10,7,20,0,1,18,0,3,3,10,12,6,20]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,4,0,0,1,0,0,0,2,51,9,11]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,20,5,31,4,1,2,0,2,3,5,10,19,15]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,439,40,153,12,10,37,2,16,14,42,139,49,97]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,236,163,911,23,9,172,17,47,149,98,526,465,249]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,68,122,513,25,17,102,4,28,103,46,160,114,146]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73,74,294,531,70,42,376,31,149,74,121,252,142,540]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,45,221,305,57,30,255,17,108,50,93,39,105,372]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,38,48,202,18,9,71,3,23,19,35,97,43,111]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,18,205,284,20,12,46,3,19,146,59,10,41,107]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,13,95,1198,44,34,167,8,67,95,89,5,156,255]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,37,65,347,14,10,64,3,19,10,34,12,58,85]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,110,343,844,31,57,308,6,58,244,381,51,336,212]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,37,107,741,28,17,174,12,54,53,67,41,173,166]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,156,193,551,54,37,291,17,95,91,291,153,253,311]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,123,35,279,408,3559,75,536,12,277,58,99,31,352,631]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,51,173,670,321,48,7546,39,830,73,267,52,446,1154]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,85,22,123,82,37,12,88,15,47,10,39,15,48,139]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,84,349,394,104,52,488,210,203,39,128,62,145,741]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,49,108,143,62,30,222,9,757,20,37,127,34,170]
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,54,37,205,44,87,225,1,113,30,640,15,75,201]
[1086,47,0,9,22,49,90,73,55,25,8,23,12,48,34,69,123,138,85,71,55,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[792,10,17,20,439,236,68,74,45,38,18,13,37,110,37,156,35,51,22,84,49,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[1699,7,0,5,40,163,122,294,221,48,205,95,65,343,107,193,279,173,123,349,108,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[2968,20,4,31,153,911,513,531,305,202,284,1198,347,844,741,551,408,670,82,394,143,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[1570,0,0,4,12,23,25,70,57,18,20,44,14,31,28,54,3559,321,37,104,62,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[545,1,0,1,10,9,17,42,30,9,12,34,10,57,17,37,75,48,12,52,30,87,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[4927,18,1,2,37,172,102,376,255,71,46,167,64,308,174,291,536,7546,88,488,222,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[359,0,0,0,2,17,4,31,17,3,3,8,3,6,12,17,12,39,15,210,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[1674,3,0,2,16,47,28,149,108,23,19,67,19,58,54,95,277,830,47,203,757,113,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[573,3,0,3,14,149,103,74,50,19,146,95,10,244,53,91,58,73,10,39,20,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[1004,10,2,5,42,98,46,121,93,35,59,89,34,381,67,291,99,267,39,128,37,640,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[737,12,51,10,139,526,160,252,39,97,10,5,12,51,41,153,31,52,15,62,127,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[3051,6,9,19,49,465,114,142,105,43,41,156,58,336,173,253,352,446,48,145,34,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
[3260,20,11,15,97,249,146,540,372,111,107,255,85,212,166,311,631,1154,139,741,170,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    ]);

var width = 1300,
    height = 910,
    innerRadius = width * .22,
    outerRadius = innerRadius * 1.07;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(["#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#ed1c24","#991b20","#972a67","#6e398d","#856699","#5256a6","#30a2d3","#63bdcf","#4d8693","#78c27f","1b7c3e","#4db957","#85a23d","#bbb532","#f1eb18","#f09221","#c64d27"])

var clusters = ["Agriculture, Forestry Fishing and Hunting", "Mining, Quarrying, and Oil and Gas Extraction", "Utilities", "Construction", "Manufacturing", "Wholesale Trade", "Retail Trade", "Retail Trade", "Transportation and Warehousing", "Information", "Finance & Insurance", "Real Estate and Rental and Leasing", "Professional, Scientific, and Technical Services", "Management of Companies and Enterprises", "Admin./Support/Waste Mgmt./Remediation", "Educational Services", "Health Care & Social Assistance", "Arts/Entertainment & Recreation", "Accomodation & Food Services", "Other Service", "Public Administration", "Agriculture, Food & Natural Resources", "Architecture & Construction", "Arts/AV Tech./Communication", "Business Management, Marketing, and Finance", "Education and Training", "Government & Public Admin.", "Health Science", "Hospitality & Tourism", "Human Services", "Information Technology", "Law and Corrections", "Manufacturing and Transportation", "Marketing and Transportation", "STEM", "Liberal Arts, Languages, History"];

var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g")
  .selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

var ticks = svg.append("g")
  .selectAll("g")
    .data(chord.groups)
  .enter().append("g")
  .selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#787678");

ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) {
      return d.angle > Math.PI ? "end" : null;
    })
    .attr("transform", function(d) {
      return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
    })
    .text(function(d) { return d.label; });

var label = svg.append("g")
  .selectAll("g")
    .data(chord.groups)
  .enter().append("g")

label.append("text")
    .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
    .attr("dy", ".40em")
    .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + (innerRadius + 50) + ")"
          + (d.angle > Math.PI ? "rotate(180)" : "");
    })
    .text(function(d) { return clusters[d.index]; });
    // .on("mouseover", fade(.1))
    // .on("mouseout", fade(1));

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.target.index); })
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("opacity", 1);

/** Returns an array of tick angles and labels, given a group. */
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 100).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v
    };
  });
}

/** Returns an event handler for fading a given chord group. */
function fade(opacity) {
  return function(g, i) {
    svg.selectAll("g.chord path")
        .filter(function(d) {
          return d.source.index != i && d.target.index != i;
        })
      .transition()
        .style("opacity", opacity);
  };
}
