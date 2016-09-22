(function(){
    require('./fittext.js');
    var swear = require('./swear.js').swear;

    window.onload = function() {
		var swearText = document.getElementById("swear"),
			reloadButton = document.getElementById("reload_button");
		var setSwear = function() {
			var s = swear();
			swearText.textContent = s;
		};

		window.fitText(swearText);
		reloadButton.onclick = function(evt) {
			ga('send', 'event', 'reload', 'press')
			setSwear();
			// reloadButton.style.transform = "rotate(180deg)";
			evt.preventDefault();
			return false;
		}
		var mi = document.getElementById("more_info");
		mi.onclick = function(evt) {
			var info = document.getElementById("info");
			if (info.getAttribute("hidden") !== null) {
				info.removeAttribute("hidden");
			} else {
				info.setAttribute("hidden", "true");
			}
			evt.preventDefault();
			return false;
		};
		setSwear();
	};
})();
