

var request = require('request');

function requestJson (url, callback) {
    request(url, function(err, response) {
        if (err) {
            callback(err)
        }
        else {
            try {
                var x = JSON.parse(response.body);
                callback(null, x)
            }
            catch(err) {
                callback(err)
            }
        }
    })
}

module.exports = requestJson;