const { Client } = require("pg");

exports.openConnection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "othmane",
    password: "mi",
    database: "authentication",
  });
  await client.connect();
  return client;
};
exports.passRequest = async (connection, sql) =>
  await connection.query(sql, (error, result) =>
    error ? new Error("error in request to db") : result
  );

exports.closeConnection = async (connection) => {
  await connection.end();
};
