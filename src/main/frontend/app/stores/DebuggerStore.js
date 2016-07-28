var Constants = require('../Constants');
var BaseStore = require('./BaseStore');
var assign = require('object-assign');
var Client = require('./Client');

//See: https://www.clarin.eu/content/attributes-service-provider-federation
var attributes = {
    eduPersonPrincipalName: {altnames: ["eduPersonPrincipalName","eppn"], present: false, required: true},
    eduPersonTargetedID: {altnames: ["eduPersonTargetedID", "eptid", "targetted-id"], present: false, required: true},
    cn: {altnames: ["cn", "commonName"], present: false, required: false},
    mail: {altnames: [], present: false, required: false},
    o: {altnames: ["schacHomeOrganization"], present: false, required: false}
};

var _data = {headers: [], attributes: attributes, remote_user: null};

function matches(name, attribute) {
    var result = false;
    for(var i = 0; i < attribute.altnames.length; i++) {
        if(name === attribute.altnames[i]) {
            result = true;
            break;
        }
    }
    return result;
}

var DebuggerStore = assign({}, BaseStore, {
    getData: function() {
        return _data;
    },  
    
    update: function() {
        Client.get(this.onLoad);
    },
    
    onLoad: function(json) {
        _data = json;
        _data.remote_user = null
        _data.headers.forEach(function(header) {
            if(header.name === "REMOTE_USER") {
                _data.remote_user = header.values[0]; //Expect single value here
            }                
        });

        for(var key in attributes) {
            var attr = attributes[key];
            attr.present = false;
            for(var i = 0; i < _data.headers.length; i++) {
                var name = _data.headers[i].name;                
                if(matches(name, attr)) {
                    attr.present = true;
                    break;
                }
            }
        }
        //attributes.forEach(function(attr) {
            
        //});
        _data['attributes'] = attributes;
        DebuggerStore.emitChange();
    }
});

module.exports = DebuggerStore;