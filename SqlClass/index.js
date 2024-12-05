const { faker } = require('@faker-js/faker');
const mySql = require("mysql2");

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunnylee@123',
    database: 'sunny'
});
let getRandomData = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ];
}
let data=[];
for(let i=1;i<=10;i++)
{
    data.push(getRandomData());
}
let q="INSERT INTO user1(id,username,email,password) values ?";

try {
    connection.query(q,[data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}
catch(err)
{
    console.log(err);
}
connection.end(); 
