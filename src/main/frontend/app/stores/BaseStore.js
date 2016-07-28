var assign = require('object-assign');
var Constants = require('../Constants.js');
var EventEmitter = require ('events');

var BaseStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  }
});

module.exports = BaseStore;
