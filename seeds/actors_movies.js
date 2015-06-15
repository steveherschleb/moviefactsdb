var links = require('./linkActorsToMovies.json');

exports.seed = function(knex, Promise) {
  'use strict';
  
  return Promise.join(
    // Deletes ALL existing entries
    knex('actors_movies').del(),

    // Inserts seed entries
    knex('actors_movies').insert(links)
  );
};
