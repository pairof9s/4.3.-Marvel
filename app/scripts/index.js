//console.log("Hello World!");

var $ = require('jquery');

window.setTimeout(function(){  // This "stack" or full function is executed after performing first task of "Testing 2..."
  console.log('Testing..');
}, 0);

console.log('Testing 2...');  // Actual initial event triggered, before function above is called
