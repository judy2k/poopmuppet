require('./fittext.js');
var swear = require('./swear.js');

window.onload = function() {
	var swearText = document.getElementById("swear"),
		swearContent = swearText.getElementsByClassName("swearContent")[0],
		reloadButton = document.getElementById("reload_button"),
        mi = document.getElementById("more_info");

	var setSwear = function() {
		var s = swear();
		swearContent.textContent = s;
	};

    reloadButton.onclick = function(evt) {
		ga('send', 'event', 'reload', 'press')
		setSwear();
		// reloadButton.style.transform = "rotate(180deg)";
		evt.preventDefault();
		return false;
	}

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

    // Initialize view:
	window.fitText(swearText);
	setSwear();
};
