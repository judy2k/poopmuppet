(function() {
	var PRE_SWEAR = [
		'arse',
		'cock',
		'crap',
		'cunt',
		'douche',
		'fuck',
		'piss',
		'scrote',
		'shit',
		'shite',
		'twat',
		'twunt'
	];
	var POST_WORD = [
		'badger',
		'beetle',
		'biscuit',
		'boner',
		'bubble',
		'burger',
		'cake',
		'crumpet',
		'curtain',
		'divot',
		'ferret',
		'fiddle',
		'fraggle',
		'gibbon',
		'lizard',
		'mole',
		'muffin',
		'muppet',
		'nugget',
		'pilchard',
		'pimple',
		'prune',
		'spanner',
		'splat',
		'spoon',
		'toad',
		'trumpet',
		'tube',
		'waffle',
		'weasel',
		'womble'
	];
	var POST_SWEAR = [
		'crapper',
		'felcher',
		'fucker',
		'pisser',
		'shitter'
	];
	var PRE_WORD = [
		'blobfish',
		'bunny',
		'cabbage',
		'cake',
		'crab',
		'crumpet',
		'gibbon',
		'hamster',
		'lettuce',
		'mole',
		'muffin',
		'muffin',
		'muppet',
		'slug',
		'toad'
	];
	var POST_ADJECTIVE = [
		'breathing',
		'drinking',
		'eating',
		'eyed',
		'fiddling',
		'handed',
		'headed',
		'licking',
		'mouthed',
		'toed'
	];


	var getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};
	var randint = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	var choice = function(arr) {
		return arr[getRandomInt(0, arr.length)]
	};
	var adjective = function() {
		//shit-breathing
		return choice(PRE_SWEAR) + '-' + choice(POST_ADJECTIVE);
	};
	var noun = function() {
		if (randint(0, 2) < 2) {
			// shitweasel
			return choice(PRE_SWEAR) + choice(POST_WORD);
		} else {
			// muppetshitter
			return choice(PRE_WORD) + choice(POST_SWEAR);
		}
	};

	window.swear = function() {
		if (randint(0, 2) < 2) {
			// shit-breathing muppetshitter
			return adjective() + ' ' + noun();
		} else {
			// crabfucker
			return noun();
		}
	};

})();
