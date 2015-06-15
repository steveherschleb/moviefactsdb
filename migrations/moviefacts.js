exports.up = function (knex) {
  return knex.schema.
    createTable('movies', function (table) {
      table.increments('id').primary();
      table.text('name').notNullable();
      table.integer('directorID').notNullable().references('directors.id');
      table.integer('releaseYear').notNullable();
      table.text('genre').notNullable();
      table.integer('rating').notNullable();
    }).
    createTable('actors', function (table) {
      table.increments('id').primary();
      table.text('firstName').notNullable();
      table.text('lastName').notNullable();
      table.integer('age').notNullable();
    }).
    createTable('directors', function (table) {
      table.increments('id').primary();
      table.text('firstName').notNullable();
      table.text('lastName').notNullable();
      table.integer('age').notNullable();
    }).
    createTable('actors_movies', function (table) {
      table.increments('id').primary();
      table.integer('movieID').notNullable().references('movies.id');
      table.integer('actorID').notNullable().references('actors.id');
    });
  };

exports.down = function (knex) {
  return knex.schema.
    dropTable('movies').
    dropTable('actors').
    dropTable('directors').
    dropTable('actors_movies');
};
