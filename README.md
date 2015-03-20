# requirejs-optimize
Optimize requirejs projects with [r.js](https://github.com/jrburke/r.js).

#Installation
###requirejs
    npm install -g requirejs
    
After installation:

* find r.js under the path of installed directory, and paste r.js to the root of your requirejs project.
* create build.js under the root of your requirejs project.

###build.js example
```js
{
    //The directory path to save the output.
    //All relative paths are relative to the build file.
    dir: "./build",
    //All modules are located relative to this path
    baseUrl: "./src",
    //the main script of the project which contain the configuration for the app
    //if set, all config below is not neccesory
    mainConfigFile: 'js/app.js',
    //module you want to optimize(the entry file which require modules)
    //path relative to the baseUrl
    name: "js/app/rtest",
    //out: 'js/app/build.js', //used in optimize one file
    //fileExclusionRegExp: /^(app)\.js$/, //file which will be skipped
    paths: { //path of files
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
```

#Configuration

[doc of build.js](https://github.com/jrburke/r.js/blob/master/build/example.build.js)


#Run
    node r.js -o build.js

You will see: build directory is created, synchronous files are merged into the entry file, asynchronous files still be there, and all files are uglified.

Enjoy it!

