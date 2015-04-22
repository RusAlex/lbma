var request = require('request');
var $ = require('cheerio');

var Parser = {

  getGold: function(success) {
    var r = this._getRequest();
    r('http://lbma.oblive.co.uk/table', function(err, res, body) {
      if (err) {
        console.log(err);
        return;
      }
      var result = {
        date: null,
        usd: {
          am: null,
          pm: null
        }
      };
      var html = $('.stuff .data tbody tr', body).first();
      result.date = $('td', html)[0].children[0].data;
      result.usd = {
        am:  $('td', html)[1].children[0].data,
        //pm:  $('td', html)[2].children[0].data
        pm:  $('td', html)[2].children[0] ? $('td', html)[2].children[0].data : null
      };
      success(result);
    });
  },

  getSilver: function(success) {
  },

  _getRequest: function() {
    return request;
  }

};

exports = module.exports = Parser;
