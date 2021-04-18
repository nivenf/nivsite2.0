window.onresize = function() { location.reload(); };

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
					
					var pageX = event.pageX;
					var pageY = event.pageY;
					
					var degreeScaleX = d3.scaleLinear()
					.domain([0, WIN_WIDTH/2, WIN_WIDTH])
					.range([-45, 0, 45]);
											
					var degreeScaleY = d3.scaleLinear()
					.domain([0, WIN_HEIGHT/2, WIN_HEIGHT])
					.range([-40, 0, 40]);
					
					svg_dir.select("#GROUP_NAME")
					.attr("transform-origin", "center 45% 20px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
					svg_dir.select("#text-port")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
					svg_dir.select("#text-about")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
					svg_dir.select("#text-contact")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
				});

// NIVEN FRANCIS

var GROUP_NAME = svg_dir.append("g").attr("id", "GROUP_NAME");

var d_nf_cx = WIN_WIDTH/2;
var d_nf_cy = WIN_HEIGHT/2;

var text_name = GROUP_NAME.append("text")
						  .attr("x", d_nf_cx - 200)
						  .attr("y", (d_nf_cy * 80 / 100))
						  .text("NIVEN FRANCIS")
						  .attr("font-family", "'EB Garamond', serif")
						  .attr("font-size", "30px")
						  .attr("letter-spacing", "18px")
						  .attr("fill", "White")
						  .attr("font-smooth", "2em")
						  .attr("id", "text-name");
						  
						  
// SELECTORS

var GROUP_SELECTORS = svg_dir.append("g").attr("id", "GROUP_SELECTORS")								 
										 .attr("font-family", "Calibri")
										 .attr("font-size", "35px")
										 .attr("fill", "White")
										 .attr("font-smooth", "2em");

var text_select = GROUP_SELECTORS.append("text")
								 .attr("x", d_nf_cx - 85)
								 .attr("y", d_nf_cy)
								 .text("PORTFOLIO")
								 .attr("id", "text-port");

								
var text_port = GROUP_SELECTORS.append("text")
							   .attr("x", d_nf_cx - 320)
							   .attr("y", d_nf_cy)
							   .text("ABOUT")
							   .attr("id", "text-about");
							   
var text_contact = GROUP_SELECTORS.append("text")
							   .attr("x", d_nf_cx + 190)
							   .attr("y", d_nf_cy)
							   .text("CONTACT")
							   .attr("id", "text-contact");