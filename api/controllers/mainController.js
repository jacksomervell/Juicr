var request = require('ajax-request');

function getInfo(req, response){

  var nutrientId = req.params.ndbno
  var url = 'http://api.nal.usda.gov/ndb/reports/?ndbno=' + nutrientId + '&type=f&format=json&api_key=hHBE2kbIIImRtwg3ZtpiPkwCUfS4OL54rejo2q0b'


  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {
    var data = JSON.parse(body)
    var nutrientData = data.report.food.nutrients

  nutrientData = nutrientData.filter(function (el) {
    return el.name === ("Protein") ||
          el.name === ("Energy")
        
    });
    
    response.json(nutrientData)
  });
}


module.exports = {
  getInfo: getInfo
}