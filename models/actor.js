var Bookshelf = require('../config/bookshelf');


var Actor = Bookshelf.Model.extend({
  tableName: 'actors',

  movies: function() {
    return this.belongsToMany('Movie', 'actors_movies', 'actorID', 'movieID');
  },
  
  virtuals: {
    fullName: function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }
});


module.exports = Bookshelf.model('Actor', Actor);
