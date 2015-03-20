requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: './src',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
		//'app': 'app',
		'lodash': 'js/lib/lodash/dist/lodash',
		'jquery': 'js/lib/jquery/dist/jquery.min',
		'when': 'js/lib/when/when'
	},
	shim: {
		'jquery': {
			exports: '$'
		}
	}
});

// Start the main app logic.
requirejs(['js/app/' + globalSetting.name], function(test) {
	//console.log(test);
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});