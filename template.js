/*
 * grunt-init-gruntfile
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic grunt scaffolding.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {
    props.package_json = true;
    props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // If is package_json true, generate package.json
    if (props.package_json) {
      var devDependencies = {
        "grunt": "^0.4.5",
        "grunt-autoprefixer": "^3.0.4",
        "grunt-contrib-cssmin": "^1.0.1",
        "grunt-contrib-sass": "^1.0.0",
        "grunt-contrib-uglify": "^2.0.0",
        "grunt-contrib-watch": "^1.0.0"
      };

      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        node_version: '>= 0.10.0',
        devDependencies: devDependencies
      });
    }

    // All done!
    done();
  });

};
