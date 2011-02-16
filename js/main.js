debug = false;
$(function() {
		paging.init();
		var self = this;
		var fsm = new FSM({
							display: $("div#iPhone"),
							states: [
										new State({
												img_src: 'images/assigner/00_appstart.png',
												id: 'app_start',
												clickableDivs: [
													createClickableDiv(201, 262, 66, 63, 'login'),
												]
											}),
										new State({
												img_src: 'images/assigner/a_login.png',
												id: 'login',
												clickableDivs: [
													createClickableDiv(48, 465, 296, 28, 'login_type'),
												]
											}),
										new State({
												img_src: 'images/assigner/a_login  (TYPE).png',
												id: 'login_type',
												clickableDivs: [
													createClickableDiv(279, 324, 66, 24, 'taskmenu'),
												]
											}),
										new State({
												img_src: 'images/assigner/b_taskmenu.png',
												id: 'taskmenu',
												clickableDivs: [
													createClickableDiv(44, 557, 307, 44, 'newtask'),
													createClickableDiv(47, 158, 51, 29, 'edit_taskmenu'),
													createClickableDiv(295, 159, 54, 30, 'settings'),
												]
											}),
										new State({
												img_src: 'images/assigner/b_taskmenu EDIT.png',
												id: 'edit_taskmenu',
												clickableDivs: [
													createClickableDiv(44, 557, 307, 44, 'newtask'),
													createClickableDiv(47, 158, 51, 29, 'taskmenu'),
													createClickableDiv(295, 159, 54, 30, 'settings'),
												]
											}),
										new State({
												img_src: 'images/assigner/c_newtask.png',
												id: 'newtask',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'taskmenu'),
													createClickableDiv(61,212,274,44, 'mover'),
													createClickableDiv(58,272,279,45, 'driver'),
													createClickableDiv(62,331,273,48, 'custodian'),
													createClickableDiv(62,391,275,43, 'cashier'),
													createClickableDiv(62,453,273,40, 'handyman'),
													createClickableDiv(62,512,273,41, 'typist'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_mover.png',
												id: 'mover',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_driver.png',
												id: 'driver',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_custodian.png',
												id: 'custodian',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_cashier.png',
												id: 'cashier',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_handyman.png',
												id: 'handyman',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d_typist.png',
												id: 'typist',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'newtask'),
													createClickableDiv(262,340,75,28, 'meeting_time'),
													createClickableDiv(263,427,73,26, 'location'),
													createClickableDiv(44,556,306,46, 'request_sent'),
												]
											}),
										new State({
												img_src: 'images/assigner/d2_location.png',
												id: 'location',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'mover'),
												]
											}),
										new State({
												img_src: 'images/assigner/d2_meetingtime.png',
												id: 'meeting_time',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'mover'),
												]
											}),
										new State({
												img_src: 'images/assigner/b_billing information.png',
												id: 'settings',
												clickableDivs: [
													createClickableDiv(48,157,32,31, 'taskmenu'),
												]
											}),
										new State({
												img_src: 'images/assigner/f_profileRoger Copy 1.png',
												id: 'request_sent',
												clickableDivs: [
													createClickableDiv(202,395,123,33, 'results'),
													createClickableDiv(71,397,117,31, 'taskmenu'),
												],
											}),
										new State({
												img_src: 'images/assigner/e_results.png',
												id: 'results',
												clickableDivs: [
													createClickableDiv(39,223,317,102, 'roger'),
												],
											}),

										new State({
												img_src: 'images/assigner/f_profileRoger.png',
												id: 'roger',
												clickableDivs: [
													createClickableDiv(52,568,136,25, 'select_roger'),
													createClickableDiv(211,569,128,27, 'contact_roger'),
												],
											}),
										new State({
												img_src: 'images/assigner/last_screen.png',
												id: 'select_roger',
												clickableDivs: [
													createClickableDiv(64,390,127,41, 'taskmenu'),
													createClickableDiv(199,392,124,39, 'contact_roger'),
												],
											}),
										new State({
												img_src: 'images/assigner/f_profileRoger Copy.png',
												id: 'contact_roger',
												clickableDivs: [
													createClickableDiv(67,392,125,39, 'call'),
													createClickableDiv(199,392,128,41, 'text'),
												],
											}),
										new State({
												img_src: 'images/assigner/g_call.png',
												id: 'call',
												clickableDivs: [
													createClickableDiv(55,539,284,49, 'app_start'),
												],
											}),
										new State({
												img_src: 'images/assigner/g_text.png',
												id: 'text',
												clickableDivs: [
													createClickableDiv(49,158,35,32, 'contact_roger'),
												],
											}),
									],
								firstState: 'app_start'
							});
		/*
												onExit: function() {
													$("div#iPhone").css("-webkit-transform", "rotate(720deg)");
												}
												*/
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
	var self = this;
	this.options = options;
	this.display = this.options.display;
	this.states = this.options.states;

	this.img = $("<img />").appendTo(this.display);
	if(debug) {
		function getX(oElement) {
			var iReturnValue = 0;
			while( oElement != null ) {
				iReturnValue += oElement.offsetLeft;
				oElement = oElement.offsetParent;
			}
			return iReturnValue;
		}

		function getY(oElement) {
			var iReturnValue = 0;
			while( oElement != null ) {
				iReturnValue += oElement.offsetTop;
				oElement = oElement.offsetParent;
			}
			return iReturnValue;
		}
		
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
							startX -= getX(self.img[0]);
							startY -= getY(self.img[0]);
							startclick = null;
							window.setTimeout(function(){
								rectDiv.remove();
								}, 1000);
							console.log(startX+","+startY+","+w+","+h+",");
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
