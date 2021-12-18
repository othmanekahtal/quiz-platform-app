const {Pool} = require("pg");

exports.openConnection = async () => await new Pool({
    host: "localhost",
    port: 5432,
    user: "othmane",
    password: "mi",
    database: "m-learning",
});

exports.passRequest = async (connection, sql) => {
        return await connection.query(sql)
}

exports.closeConnection = async (connection) => {
    await connection.end();
}