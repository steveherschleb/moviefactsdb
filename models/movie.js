var Bookshelf = require('../config/bookshelf');

var Movie = Bookshelf.Model.extend({
  tableName: 'movies',

  director: function() {
    'use strict';

    return this.belongsTo('Director', 'directorID');
  },
  
  actors: function() {
    'use strict';
    
    return this.belongsToMany('Actor', 'actors_movies', 'movieID', 'actorID');
  }
   
});


module.exports = Bookshelf.model('Movie', Movie);
