window.onresize = function() { location.reload(); };

var WIN_HEIGHT = window.innerHeight;
var WIN_WIDTH = window.innerWidth;
var WIN_SCALE_X = WIN_WIDTH / 1920;
var WIN_SCALE_Y = WIN_HEIGHT / 1080;

var test = false;

var svg_dir = d3.select("#director")
				.append("svg")
				.attr("width", WIN_WIDTH)
				.attr("height", WIN_HEIGHT)
				.attr("id", "d3_director")
				.attr("position", "relative")
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
					
		//--------------------------------------------------------------------------
					
					svg_dir.select("#text-port")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					})
					.on("mouseover", function(event, d) {
						svg_dir.select("#hl-rect-port")
						.attr("fill", "white")
						.transition()
						.duration(200)
						.attr("width", "190");
						
						svg_dir.select("#text-port")
						.transition()
						.duration(200)
						.attr("fill", "black");
					})
					.on("mouseout", function(event, d) {
						svg_dir.select("#hl-rect-port")
						.transition()
						.duration(200)
						.attr("width", "0");
						
						svg_dir.select("#text-port")
						.transition()
						.duration(200)
						.attr("fill", "white");
					})
					.on("click", function(event, d) {
						svg_dir.select("#page_rect")
						.transition()
						.duration(700)
						.attr("y", 0)
						.ease(d3.easeCubicOut);
					});
					
					
					
					svg_dir.select("#text-about")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					})
					.on("mouseover", function(event, d) {
						svg_dir.select("#hl-rect-about")
						.attr("fill", "white")
						.transition()
						.duration(200)
						.attr("width", "127");

						svg_dir.select("#text-about")
						.transition()
						.duration(200)
						.attr("fill", "black");
					})
					.on("mouseout", function(event, d) {
						svg_dir.select("#hl-rect-about")
						.transition()
						.duration(200)
						.attr("width", "0");
						
						svg_dir.select("#text-about")
						.transition()
						.duration(200)
						.attr("fill", "white");
					})
					.on("click", function(event, d) {
						svg_dir.select("#page_rect")
						.transition()
						.duration(700)
						.attr("y", 0)
						.ease(d3.easeCubicOut);
					});
					
					
					
					svg_dir.select("#text-contact")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					})
					.on("mouseover", function(event, d) {
						svg_dir.select("#hl-rect-contact")
						.transition()
						.duration(200)
						.attr("width", "160");
						
						svg_dir.select("#text-contact")
						.transition()
						.duration(200)
						.attr("fill", "black");
					})
					.on("mouseout", function(event, d) {
						svg_dir.select("#hl-rect-contact")
						.transition()
						.duration(200)
						.attr("width", "0");
						
						svg_dir.select("#text-contact")
						.transition()
						.duration(200)
						.attr("fill", "white");
					})
					.on("click", function(event, d) {
						svg_dir.select("#page_rect")
						.transition()
						.duration(700)
						.attr("y", 0)
						.ease(d3.easeCubicOut);
					});
					
		//--------------------------------------------------------------------------
					
					svg_dir.select("#hl-rect-port")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
					svg_dir.select("#hl-rect-about")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
					svg_dir.select("#hl-rect-contact")
					.attr("transform-origin", "center center -200px")
					.attr("style", function() {
						return "transform: " + "rotateX(" + degreeScaleY(pageY)*1 + "deg)" + "rotateY(" + degreeScaleX(pageX)*-1 + "deg);";
					});
					
		//--------------------------------------------------------------------------

				});

// NIVEN FRANCIS

var GROUP_NAME = svg_dir.append("g").attr("id", "GROUP_NAME");

var d_nf_cx = WIN_WIDTH/2;
var d_nf_cy = WIN_HEIGHT/2;

var text_name = GROUP_NAME.append("text")
						  .attr("x", d_nf_cx - 220)
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

var highlight_port = GROUP_SELECTORS.append("rect")
					   .attr("x", d_nf_cx - 99)
					   .attr("y", d_nf_cy - 36)
					   .attr("width", "0")
					   .attr("height", "52")
					   .attr("id", "hl-rect-port");
					   
var highlight_about = GROUP_SELECTORS.append("rect")
					   .attr("x", d_nf_cx - 332)
					   .attr("y", d_nf_cy - 36)
					   .attr("width", "0")
					   .attr("height", "52")
					   .attr("id", "hl-rect-about");
					   
var highlight_contact = GROUP_SELECTORS.append("rect")
					   .attr("x", d_nf_cx + 177)
					   .attr("y", d_nf_cy - 36)
					   .attr("width", "0")
					   .attr("height", "52")
					   .attr("id", "hl-rect-contact");

var text_port = GROUP_SELECTORS.append("text")
								 .attr("x", d_nf_cx - 85)
								 .attr("y", d_nf_cy)
								 .text("PORTFOLIO")
								 .attr("id", "text-port")
								 .attr("fill", "white")
								 .attr("cursor", "pointer");
								
var text_about = GROUP_SELECTORS.append("text")
							   .attr("x", d_nf_cx - 320)
							   .attr("y", d_nf_cy)
							   .text("ABOUT")
							   .attr("id", "text-about")
							   .attr("fill", "white")
							   .attr("cursor", "pointer");
							   
var text_contact = GROUP_SELECTORS.append("text")
							   .attr("x", d_nf_cx + 190)
							   .attr("y", d_nf_cy)
							   .text("CONTACT")
							   .attr("id", "text-contact")
							   .attr("fill", "white")
							   .attr("cursor", "pointer");


// PAGE CONTENT


var page_group = svg_dir.append("g").attr("id", "PAGE")
                                    .attr("fill", "gray");
				   
var page_rect = page_group.append("rect")
						  .attr("x", (WIN_WIDTH - (WIN_WIDTH * 0.75)) / 2)
						  .attr("y", WIN_HEIGHT)
						  .attr("width", WIN_WIDTH * 0.75)
						  .attr("height", WIN_HEIGHT)
						  .attr("id", "page_rect");

					
var point_1 = 10 * WIN_SCALE_X;
var point_2 = 80 * WIN_SCALE_X;	
	
var exit = page_group.append("g")
					.attr("id", "exit")
					.attr("transform", "translate(" + (((WIN_WIDTH - (WIN_WIDTH * 0.75)) / 2) - (point_2 * 1.5)) + ", 30)")
					.on("click", function(event, d) {
						svg_dir.select("#page_rect")
						.transition()
						.duration(700)
						.attr("y", WIN_HEIGHT)
						.ease(d3.easeCubicOut);
					});
					
var invis_rect = page_group.select("#exit")
						   .append("rect")
						   .attr("width", point_2 + point_1)
						   .attr("height", point_2 + point_1)
						   .attr("fill", "gray");

var line = page_group.select("#exit")
					.append("line")
					.attr("x1", point_2)
					.attr("y1", point_1)
					.attr("x2", point_1)
					.attr("y2", point_2)
					.attr("stroke", "black")
					.attr("stroke-width", 5);
					
var line = page_group.select("#exit")
					.append("line")
					.attr("x1", point_1)
					.attr("y1", point_1)
					.attr("x2", point_2)
					.attr("y2", point_2)
					.attr("stroke", "black")
					.attr("stroke-width", 5);
					

// -------------------------------------------------------------


var button_group = d3.select("#button_group")
					 .on("mousemove", function(event, d) {						
						svg_dir.select("#text-about")
						.transition()
						.duration(50)
						.attr("style", function() {
							return "transform: " + "rotateX(" + 0*1 + "deg)" + "rotateY(" + 0*-1 + "deg); filter: blur(3px);";
						})
						
						svg_dir.select("#text-port")
						.transition()
						.duration(50)
						.attr("style", function() {
							return "transform: " + "rotateX(" + 0*1 + "deg)" + "rotateY(" + 0*-1 + "deg); filter: blur(3px);";
						})
						
						svg_dir.select("#text-contact")
						.transition()
						.duration(50)
						.attr("style", function() {
							return "transform: " + "rotateX(" + 0*1 + "deg)" + "rotateY(" + 0*-1 + "deg); filter: blur(3px);";
						})
						
						svg_dir.select("#GROUP_NAME")
						.transition()
						.duration(50)
						.attr("style", function() {
							return "transform: " + "rotateX(" + 0*1 + "deg)" + "rotateY(" + 0*-1 + "deg);";
						})
				     })
					 
					 .on("mouseout", function(event, d) {
						test = true;
					 });
						  



// -------------------------------------------------------------

/**
 * You can find an explanation for this code here - https://dev.to/jashgopani
 */
const offset = 69;
const angles = []; //in deg
for (let i = 0; i <= 360; i += 45) {
  angles.push((i * Math.PI) / 180);
}
let nearBy = [];

function clearNearBy() {
  nearBy.splice(0, nearBy.length).forEach((e) => (e.style.borderImage = null));
}

/*Effect #1 explanation - bit.ly/win10-button-effect*/
document.querySelectorAll(".win-btn").forEach((b) => {
  // console.log(b);
  b.onmouseleave = (e) => {
    e.target.style.background = "black";
    e.target.style.borderImage = null;
    e.target.border = "5px solid transparent";
  };

  b.onmouseenter = (e) => {
    clearNearBy();
  };

  b.addEventListener("mousemove", (e) => {
    e.target.border = "1px solid transparent";
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.25),rgba(255,255,255,0) )`;
    e.target.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 9 / 2px / 0px stretch `;
  });
});

const body = document.querySelector(".win-grid");

body.addEventListener("mousemove", (e) => {
  const x = e.x; //x position within the element.
  const y = e.y; //y position within the element.

  clearNearBy();
  nearBy = angles.reduce((acc, rad, i, arr) => {
    const cx = Math.floor(x + Math.cos(rad) * offset);
    const cy = Math.floor(y + Math.sin(rad) * offset);
    const element = document.elementFromPoint(cx, cy);

    if (element !== null) {
      // console.log("cursor at ", x, y, "element at ", cx, cy, element);
      if (
        element.className === "win-btn" &&
        acc.findIndex((ae) => ae.id === element.id) < 0
      ) {
        const brect = element.getBoundingClientRect();
        const bx = x - brect.left; //x position within the element.
        const by = y - brect.top; //y position within the element.
        if (!element.style.borderImage)
          element.style.borderImage = `radial-gradient(${offset * 2}px ${
            offset * 2
          }px at ${bx}px ${by}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1),transparent ) 9 / 1px / 0px stretch `;
        return [...acc, element];
      }
    }
    return acc;
  }, []);
});

body.onmouseleave = (e) => {
  clearNearBy();
};