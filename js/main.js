$(function() {
		paging.init();
		var self = this;
		var fsm = new FSM({
							firstState: 'login',
							display: $("div#iPhone"),
							states: [
										new State({
												img_src: 'images/a_login.png',
												id: 'login',
												clickableDivs: [
												   createClickableDiv(195, 558, 84, 46, 'taskmenu'),
												]
											}),
										new State({
												img_src: 'images/b_taskmenu.png',
												id: 'taskmenu',
												clickableDivs: [
												]
											}),

									]
							});
		$(window).bind('hashchange', function(evt) {
				var hash = window.location.hash.substr(1);
				if(hash != fsm.state.id) { // The hash doesn't match the page
					fsm.setState(hash);	
				}
		});
	}
)

var paging = {

	order: ["main", "design", "people", "process"],

	main: null,
	design: null,
	people: null,
	process: null,

	currentPage: "main",

	init: function() {
		this.main = $("#main");
		this.design = $("#design");
		this.people = $("#people");
		this.process = $("#process");

		$("#a-main").click(this.pageTurn("main"));
		$("#a-design").click(this.pageTurn("design"));
		$("#a-people").click(this.pageTurn("people"));
		$("#a-process").click(this.pageTurn("process"));

		this.contentLeft = this.main.offset().left;
		this.contentTop = this.main.offset().top;

		this.main.addClass("content-page");
		this.main.css({
			top: this.contentTop,
			left: this.contentLeft
		});
	
	},

	contentLeft: 0,
	contentTop: 0,

	offset: 5000,

	pageTurn: function(pageName) {
		return function(event) {
			event.preventDefault();

			var currentPage = paging.currentPage;
			var newPage = pageName;
			
			if(currentPage == newPage) return;

			var multp = (paging.order.indexOf(newPage) < paging.order.indexOf(currentPage)) ? -1 : 1;

			// console.log(paging[newPage]);

			paging[newPage].removeClass("content-hidden");
			paging[newPage].css({
				"top": paging.contentTop,	
				"left": multp * paging.offset
			});

			paging[newPage].animate({
				left: paging.contentLeft
			}, 500);

			paging[currentPage].animate({
				left: multp * -1 * paging.offset
			}, 500, function(){
				$(this).addClass("content-hidden");
			});

			paging.currentPage = pageName;

		}
	}
}

startclick = null;
debug = false;

var createClickableDiv = function(x, y, w, h, toState) {
	var rv = $("<div />").css("position", "absolute")
						.css("left", (x) + "px")
						.css("top", (y) + "px")
						.css("width", (w) + "px")
						.css("height", (h) + "px")
						.addClass("click_indicator");
	return {div: rv, toState: toState};
};

var State = function(options) {
	this.options = options;
	this.id = this.options.id;
	this.onEnter = this.options.onEnter;
	this.onExit = this.options.onExit;
	this.img_src = this.options.img_src;
	if(this.options.clickableDivs == null) this.clickableDivs = [];
	else this.clickableDivs = this.options.clickableDivs;
};

var FSM = function(options) {
	this.options = options;
	this.display = this.options.display;
	this.states = this.options.states;

	this.img = $("<img />").appendTo(this.display);
	if(debug) {
		$(window).mousedown(function(evt) {
							startclick = [evt.clientX, evt.clientY];
							rectDiv = $("<div />").css("opacity", 0.8)
												.css("position", "absolute")
												.css("z-index", 1000)
												.css("left", evt.clientX)
												.css("top", evt.clientY)
												.css("background-color", "orange")
												.css("border", "5px dashed yellow")
												.css("border-radius", "10px")
												.appendTo($("body"));
							return false;
						})
				.mousemove(function(evt) {
							if(startclick!=null) {
							rectDiv.css("width", (evt.pageX - startclick[0])+"px")
									.css("height", (evt.pageY - startclick[1])+"px");
							}
						})
				.mouseup(function(evt) {
							var startX = startclick[0];
							var startY = startclick[1];
							var w = evt.pageX - startX;
							var h = evt.pageY - startY;
							startclick = null;
							window.setTimeout(function(){
								rectDiv.remove();
								}, 1000);
							console.log(startX+", "+startY+", "+w+", "+h);
						});
	}
	this.setState(this.options.firstState);
};

FSM.prototype.getState = function(stateId) {
	for(var i = 0; i<this.states.length; i++) {
		if(this.states[i].id == stateId) return this.states[i];
	}
};

FSM.prototype.setState = function(stateId) {
	var self = this,
		fromState = self.state,
		toState = self.getState(stateId);

	if(fromState!=null) {
		if(fromState.onExit!=null) {
			fromState.onExit(toState);
		}
	}
	self.state = toState;
	if(toState!=null) {
		self.img.attr("src", toState.img_src);
		location.href = "#"+toState.id;
		if(toState.onEnter!=null) {
			toState.onEnter(fromState);
		}
		$("div", self.display).remove();
		for(var i = 0; i<toState.clickableDivs.length; i++) {
			var clickableDiv = toState.clickableDivs[i];
			var div = clickableDiv.div;


			self.display.append(div.click((function(clickableDiv) {
							return function() {
								self.setState(clickableDiv.toState);
							};
						})(clickableDiv)));

			div	.removeClass("hover")
				.hover(
					function() {
						$(this).addClass("hover");
					},
					function() {
						$(this).removeClass("hover");
					}
					);

			window.clearInterval(clickableDiv.anim);
			clickableDiv.anim = window.setInterval((function(clickableDiv) {
						return function() {
							var div = clickableDiv.div;
							div.toggleClass("highPulse");
						};
						})(clickableDiv), 1000);
		}
	}
};
