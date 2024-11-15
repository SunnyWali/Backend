const { faker } = require('@faker-js/faker');
const mySql = require("mysql2");

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunnylee@123',
    database: 'sunny'
});
let q="Insert into user1(id,username,email,password) values ?";
let users=[
    ["101","sunny","sunny@gmail.com","sunny123"],
    ["102","ramesh","ramesh@gmail.com","ramesh123"]
];
try {
    connection.query(q,[users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}
catch(err)
{
    console.log(err);
}
connection.end(); 
// let getRandomData = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

// console.log(getRandomData());
