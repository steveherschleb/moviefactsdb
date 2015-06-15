module.exports = {
  client: 'sqlite3',
  debug: false,
  connection: {
    filename: 'db.sqlite'
  },
  seeds: {
    directory: './seeds'
  }
};
