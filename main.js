var WIN_HEIGHT = window.innerHeight;
var WIN_WIDTH = window.innerWidth;
var WIN_SCALE_X = WIN_WIDTH / 1920;
var WIN_SCALE_Y = WIN_HEIGHT / 1080;

var svg_dir = d3.select("#director")
				.append("svg")
				.attr("width", WIN_WIDTH)
				.attr("height", WIN_HEIGHT)
				.attr("id", "d3_director")
				.on("mousemove", function(event, d) {
					
					svg_dir.select("#GROUP_NAME")
					.attr("transform", function() {
						var pageX = event.pageX;
						var pageY = event.pageY;

						var x_offset = pageX * -0.05 + (WIN_WIDTH * 0.02 / 2);
						var y_offset = pageY * -0.05 + (WIN_HEIGHT * 0.02 / 2);

						return "translate(" + x_offset + "," + y_offset + ")";
					});
					
				});


// NIVEN FRANCIS

var GROUP_NAME = svg_dir.append("g").attr("id", "GROUP_NAME");

var d_nf_cx = WIN_WIDTH/2;
var d_nf_cy = WIN_HEIGHT/2;

var text_name = GROUP_NAME.append("text")
						  .attr("x", d_nf_cx - 170)
						  .attr("y", d_nf_cy)
						  .text("NIVEN FRANCIS")
						  .attr("font-family", "'EB Garamond', serif")
						  .attr("font-size", "24px")
						  .attr("letter-spacing", "18px")
						  .attr("fill", "White")
						  .attr("font-smooth", "2em")
						  .attr("id", "text-name");