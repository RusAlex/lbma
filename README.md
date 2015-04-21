Just LBMA getter recent Londong Gold and Silver fixes.


API:

var lbma = require('lbma');

lbma.getGold(function(result) {
  // do something with reulst
  // result.date
  // result.pm
  // result.am
});

lbma.getSilver(function(result) {
  // do something with siver result
  // result.date
  // result.value
});
