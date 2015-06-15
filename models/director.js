var Bookshelf = require('../config/bookshelf');


var Director = Bookshelf.Model.extend({
  tableName: 'directors',

  movies: function() {
    'use strict';

    return this.hasMany('Movie', 'directorID');
  },

  virtuals: {
    fullName: function () {
      'use strict';
      
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }
});


module.exports = Bookshelf.model('Director', Director);
