var Bookshelf = require('../config/bookshelf');


var Director = Bookshelf.Model.extend({
  tableName: 'directors',

  movies: function() {
    return this.hasMany('Movie', 'directorID');
  },

  virtuals: {
    fullName: function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }
});


module.exports = Bookshelf.model('Director', Director);
