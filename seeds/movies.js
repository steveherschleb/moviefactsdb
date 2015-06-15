var movies = require('./movies.json');

exports.seed = function(knex, Promise) {
  'use strict';
  
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(), 

    // Inserts seed entries
    knex('movies').insert(movies)
  );
};
