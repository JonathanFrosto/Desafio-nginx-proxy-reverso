const connection = require('./mysqlConnection');

function addPerson() {
    const insertQuery = "INSERT INTO people (name) VALUES ('jonathan')";
    connection.query(insertQuery);
}

async function findPeople() {
    const findPeopleQuery = "SELECT name FROM people"

    return await query(findPeopleQuery, null)
    .then(rows => rows.map(el => el.name));
}

const query = (q, data) => {
    return new Promise((resolve, reject) => {
      connection.query(q, data, (err, res) => {
        err ? reject(err) : resolve(res)
      })
    })
}

exports.addPerson = addPerson
exports.findPeople = findPeople
