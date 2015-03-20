define(function(require) {
	var $ = require('jquery');
	var _ = require('lodash');

	function PageConsole(opts) {
		var defaults = {
			selector: '#console',
			style: {
				normal: {'color': '#333'},
				error: {'color': 'red'},
				warn: {'color': 'white', 'background': 'yellow'}
			}
		}

		this.opts = _.extend(defaults, opts);

		this.init();
	}

	PageConsole.prototype.init = function() {
		this.$ele = $(this.opts.selector);
		if(!this.$ele.length) {
			this.$ele = $('<div></div>').attr('id', this.opts.selector);
			$('body').append(this.$ele);
		}
		return this;
	};

	PageConsole.prototype.log = function(str, status) {
		status = status || 'normal';
		var p = $('<p></p>').html(str).css(this.opts.style[status]);
		this.$ele.append(p);
		return this;
	};

	return PageConsole;
})