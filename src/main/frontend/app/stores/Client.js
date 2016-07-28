var Client = {
    get: function(callback) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function(e) {
          callback(JSON.parse(this.responseText));
        };
        oReq.open("GET", "/debugger/rest/debug");
        oReq.send();
    }
};

module.exports = Client;


