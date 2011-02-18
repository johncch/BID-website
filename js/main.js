debug = false;
$(function() {
		paging.init();
		
		preloadImages([
			'images/helper/Helper_Confirm.png',
			'images/helper/Helper_Decline.gif',
			'images/helper/Helper_home_page.gif',
			'images/helper/Helper_Map.gif',
			'images/helper/Helper_Notification_sent.gif',
			'images/helper/Helper_Start_page.gif',
			'images/helper/Helper_Task_info.gif',
			'images/helper/Helper_task_notification.png',
			'images/assigner/00_appstart.png',
			'images/assigner/00000002',
			'images/assigner/a_login  (TYPE).png',
			'images/assigner/a_login.png',
			'images/assigner/b_billing information.png',
			'images/assigner/b_helpermenu.png',
			'images/assigner/b_taskmenu EDIT.png',
			'images/assigner/b_taskmenu.png',
			'images/assigner/c_newtask.png',
			'images/assigner/d_cashier.png',
			'images/assigner/d_custodian.png',
			'images/assigner/d_driver.png',
			'images/assigner/d_handyman.png',
			'images/assigner/d_mover.png',
			'images/assigner/d_sitter.png',
			'images/assigner/d_typist.png',
			'images/assigner/d2_location.png',
			'images/assigner/d2_meetingtime.png',
			'images/assigner/e_results.png',
			'images/assigner/f_profileRoger Copy 1.png',
			'images/assigner/f_profileRoger Copy.png',
			'images/assigner/f_profileRoger.png',
			'images/assigner/g_call.png',
			'images/assigner/g_text.png',
			'images/assigner/last_screen.png',
			'images/assigner/request_sent.png',
			'images/assigner/ZipGig_AppsScreen.png'
		]);

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
												],
												onEnter: function() {
													$("<div class='usernametext' />").text("max_null")
																					.appendTo($("div#iPhone"))
																					.css("position", "absolute")
																					.css("top", "230px")
																					.css("left", "60px")
																					;
													$("<div class='usernametext' />").text("********")
																					.appendTo($("div#iPhone"))
																					.css("position", "absolute")
																					.css("top", "280px")
																					.css("left", "60px")
																					;
													$("<div class='whitecover' />").css("background-color", "white")
																					.appendTo($("div#iPhone"))
																					.css("position", "absolute")
																					.css("top", "230px")
																					.css("left", "55px")
																					.css("height", "25px")
																					.css("width", "100px")
																					.animate({left: "155px"}, 3000);
													$("<div class='whitecover' />").css("background-color", "white")
																					.appendTo($("div#iPhone"))
																					.css("position", "absolute")
																					.css("top", "280px")
																					.css("left", "55px")
																					.css("height", "25px")
																					.css("width", "100px")
													window.setTimeout(function(){$("div.whitecover")
																					.animate({left: "155px"}, 3000); }, 4000);

												},
												onExit: function() {
													$("div.whitecover, div.usernametext").remove();
												}
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
												img_src: 'images/assigner/request_sent.png',
												id: 'request_sent',
												clickableDivs: [
													createClickableDiv(71,397,247,31, 'results'),
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
											//		createClickableDiv(211,569,128,27, 'contact_roger'),
												],
											}),
										new State({
												img_src: 'images/assigner/last_screen.png',
												id: 'select_roger',
												clickableDivs: [
											//		createClickableDiv(64,390,127,41, 'taskmenu'),
											//		createClickableDiv(199,392,124,39, 'contact_roger'),
												],
												onEnter: function() {
													$("div.roger").addClass("notified");
												},
												onExit: function() {
													$("div.roger").removeClass("notified");
												},
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
										new State({
												img_src: 'images/helper/Helper_Start_page.gif',
												id: 'helper_start',
												clickableDivs: [
													createClickableDiv(194,261,77,68, 'helper_notification'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_task_notification.png',
												id: 'helper_notification',
												clickableDivs: [
													createClickableDiv(199,397,123,39, 'helper_taskinfo'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_Task_info.gif',
												id: 'helper_taskinfo',
												clickableDivs: [
													createClickableDiv(50,567,136,28, 'helper_notificationsent'),
//													createClickableDiv(211,569,128,24, 'helper_home'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_Notification_sent.gif',
												id: 'helper_notificationsent',
												clickableDivs: [
													createClickableDiv(136,440,131,46, 'helper_home'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_home_page.gif',
												id: 'helper_home',
												clickableDivs: [
													createClickableDiv(138,630,113,73, 'helper_confirm'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_Confirm.png',
												id: 'helper_confirm',
												clickableDivs: [
													createClickableDiv(201,345,127,40, 'helper_map'),
												],
											}),
										new State({
												img_src: 'images/helper/Helper_Map.gif',
												id: 'helper_map',
												clickableDivs: [
												//	createClickableDiv(37,158,55,30, 'helper_taskinfo'),
												//<D-r>	createClickableDiv(279,157,78,31, 'helper_home'),
												],
											}),
									],
								firstState: 'app_start'
							});
		$("div.max").click(function() {
			fsm.setState("app_start");
			$("div.max").addClass("selected");
			$("div.roger").removeClass("selected");
		});
		$("div.roger").click(function() {
			fsm.setState("helper_start");
			$("div.roger").addClass("selected");
			$("div.max").removeClass("selected");
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

	order: ["main", "intro", "people", "process", "scenario1", "scenario2", "infoarch", "wireframe1", "wireframe2", "companalysis"],

	main: null,
	design: null,
	people: null,
	process: null,

	currentPage: "main",

	init: function() {
		this.main = $("#main");

		$(".a-links").each(function(item, el) {
			var self = $(el);
			var id = self.attr("id").substr(2);
			paging[id] = $("#" + id);
			self.click(paging.pageTurn(id));
		});

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
			console.log("page name: " + pageName);
			event.preventDefault();

			var currentPage = paging.currentPage;
			var newPage = pageName;
			
			if(currentPage == newPage) return;

			var multp = (paging.order.indexOf(newPage) < paging.order.indexOf(currentPage)) ? -1 : 1;

			paging[newPage].removeClass("content-hidden");
			paging[newPage].css({
				"top": paging.contentTop,	
				"left": multp * paging.offset
			});

			// console.log(paging.contentLeft);
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
												.css("z-index", 9999000)
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
							//console.log(startX+","+startY+","+w+","+h+",");
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
		$("div.click_indicator", self.display).remove();
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

function preloadImages(images) {
	var img;
	for(var i = 0; i < images.length; i++) {
		img = new Image(400, 750);
		img.src = images[i];
//		console.log(i);
	}
}
