if (window.shower) {
	(function(window) {
		window.shower.registry = {};

		var runScript = function(slideHash) {
			var script = window.shower.registry[slideHash];

			if (script && script.handler) {
				if (script.dependencies) {
					for(var i = 0; i < script.dependencies.length; i++) {
						runScript(script.dependencies[i]);
					}
				}
				script.handler();
			}
		};

		var originalGo = window.shower.go;

		var newGo = function(slideNumber, callback) {
			var result = originalGo(slideNumber, callback);

			if (window.shower.isSlideMode()) {
				var slideHash = window.shower.getSlideHash(slideNumber).substr(1);

				runScript(slideHash);
			}

			return result;
		}

		window.shower.go = newGo.bind(window.shower);
	})(window);
}
