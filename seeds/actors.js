var actors = require('./actors.json');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('actors').del(), 

    // Inserts seed entries
    knex('actors').insert(actors)
  );
};
