import React from 'react';
import ReactDOM from 'react-dom';
var ReactFitText = require('react-fittext');
import swear from './swear.js';


var mi = document.getElementById("more_info");

var setSwear = function() {
	var s = swear();
	document.title = s.toUpperCase();

	ReactDOM.render(
		<SwearBox swear={s} />,
		document.getElementById('swear')
	);
};

class SwearBox extends React.Component {
  render() {
    return (
		<ReactFitText>
			<div className="swearBox">
				<div className="swearContent">{this.props.swear}</div>
			</div>
		</ReactFitText>
    );
  }
}

class ReloadButton extends React.Component {
	onClick(evt) {
		ga('send', 'event', 'reload', 'press')
		setSwear();
	}

	render() {
		return (
			<a href="#what" onClick={this.onClick}><svg width="64" height="64" viewBox="0 0 512 512">
				<g className="primary">
					<path d="M444.84 83.16c-46.804-51.108-114.077-83.16-188.84-83.16-141.385 0-256 114.615-256 256h48c0-114.875 93.125-208 208-208 61.51 0 116.771 26.709 154.848 69.153l-74.848 74.847h176v-176l-67.16 67.16z"></path>
					<path d="M464 256c0 114.875-93.125 208-208 208-61.51 0-116.771-26.709-154.847-69.153l74.847-74.847h-176v176l67.16-67.16c46.804 51.108 114.077 83.16 188.84 83.16 141.385 0 256-114.615 256-256h-48z"></path>
				</g>
			</svg></a>
		);
	}
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

ReactDOM.render(
	<ReloadButton  />,
	document.getElementById('reload_button')
);
setSwear();
