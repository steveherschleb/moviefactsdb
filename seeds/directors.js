var directors = require('./directors.json');

exports.seed = function(knex, Promise) {
  'use strict';
  
  return Promise.join(
    // Deletes ALL existing entries
    knex('directors').del(), 

    // Inserts seed entries
    knex('directors').insert(directors)
  );
};
