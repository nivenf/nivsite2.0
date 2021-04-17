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
					.attr("transform-origin", "50% 45%")
					.attr("style", function() {
						var pageX = event.pageX;
						var pageY = event.pageY;

						var x_offset = pageX * -0.05 + (WIN_WIDTH * 0.02 / 2);
						var y_offset = pageY * -0.05 + (WIN_HEIGHT * 0.02 / 2);
						
						var degreeScaleX = d3.scaleLinear()
											.domain([0, WIN_WIDTH/2, WIN_WIDTH])
											.range([-45, 0, 45]);
											
						var degreeScaleY = d3.scaleLinear()
											.domain([0, WIN_HEIGHT/2, WIN_HEIGHT])
											.range([-40, 0, 40]);

						//return "translate(" + x_offset + "," + y_offset + ")";
						//return "rotateX(degreeScale(pageX))";
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
				});


// NIVEN FRANCIS

var GROUP_NAME = svg_dir.append("g").attr("id", "GROUP_NAME");

var d_nf_cx = WIN_WIDTH/2;
var d_nf_cy = WIN_HEIGHT/2;

var text_name = GROUP_NAME.append("text")
						  .attr("x", d_nf_cx - 200)
						  .attr("y", d_nf_cy - 100)
						  .text("NIVEN FRANCIS")
						  .attr("font-family", "'EB Garamond', serif")
						  .attr("font-size", "24px")
						  .attr("letter-spacing", "18px")
						  .attr("fill", "White")
						  .attr("font-smooth", "2em")
						  .attr("id", "text-name");