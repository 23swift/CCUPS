
const { src, dest } = require('gulp');

function copy() {
  return src('./build/**/*.*','read')
    .pipe(dest('../my-app/src/main/resources/static'));
}

exports.copy = copy;