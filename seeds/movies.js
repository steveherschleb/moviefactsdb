var movies = require('./movies.json');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(), 

    // Inserts seed entries
    knex('movies').insert(movies)
  );
};
