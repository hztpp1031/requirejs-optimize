define(function(require) {
	var _ = require('lodash');
	var $ = require('jquery');
	var when = require('when');

	require(['./page_console'], function(PageConsole) {
		var pageConsole = new PageConsole();
		pageConsole.log('Hello, RequireJS Optimizer!');
	});
})