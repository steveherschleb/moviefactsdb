var actors = require('./actors.json');

exports.seed = function(knex, Promise) {
  'use strict';
  
  return Promise.join(
    // Deletes ALL existing entries
    knex('actors').del(), 

    // Inserts seed entries
    knex('actors').insert(actors)
  );
};
