{
	//appDir: './',
	dir: "./build",
	baseUrl: "./src",
	name: "js/app/rtest",
	//out: 'js/app/build.js',
	//fileExclusionRegExp: /^(app)\.js$/,
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
}