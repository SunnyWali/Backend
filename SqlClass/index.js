const { faker } = require('@faker-js/faker');

let getRandomData=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomData());