var directors = require('./directors.json');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('directors').del(), 

    // Inserts seed entries
    knex('directors').insert(directors)
  );
};
