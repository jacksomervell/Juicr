var request = require('ajax-request');

function getInfo(req, response){

  var nutrientNo = req.params.nutrientNo
  var url = 'http://api.nal.usda.gov/ndb/reports/?ndbno=' + nutrientNo + '&type=f&format=json&api_key=hHBE2kbIIImRtwg3ZtpiPkwCUfS4OL54rejo2q0b'


  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {
    var data = JSON.parse(body)
    var nutrientData = data.report.food.nutrients

  nutrientData = nutrientData.filter(function (el) {
    return el.name === ("Protein") ||
          el.name === ("Energy") ||
          el.name === ("Fat") ||
          el.name === ("Fiber, total dietary") ||
          el.name === ("Sugars, total") ||
          el.name === ("Calcium, Ca") ||
          el.name === ("Iron, Fe") ||
          el.name === ("Magnesium, Mn") ||
          el.name === ("Potassium, K") ||
          el.name === ("Sodium, Na") ||
          el.name === ("Vitamin B-6") ||
          el.name === ("Vitamin B-12") ||
          el.name === ("Vitamin A") ||
          el.name === ("Vitamin B") ||
          el.name === ("Vitamin C") ||
          el.name === ("Vitamin D")
          
    });
    
    response.json(nutrientData)
  });
}


module.exports = {
  getInfo: getInfo
}