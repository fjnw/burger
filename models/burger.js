var orm = require('../config/orm.js');

// the follow-on synchronous function to the respective ORM functions
var burger = {

  // the respective follow-on syncrhonous f
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      callback(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, callback) {
    orm.insertOne('burgers', cols, vals, function(res) {
      callback(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      callback(res);
    });
  }
};

// export to controller.js
module.exports = burger;



