module.exports = {
  client: 'sqlite3',
  debug: true,
  connection: {
    filename: 'db.sqlite'
  },
  seeds: {
    directory: './seeds'
  }
};
