const { faker } = require('@faker-js/faker');
const mySql = require("mysql2");

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunnylee@123',
    database: 'delta_app'
});
try {
    connection.query("Show Tables", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}
catch(err)
{
    console.log(err);
}
connection.end(); 
let getRandomData = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(getRandomData());
