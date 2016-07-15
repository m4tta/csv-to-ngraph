var ProgressBar = require('progress');

var bar = new ProgressBar(':bar', { total: 10 });
bar.tick();
// var timer = setInterval(function () {
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 100);
