create table user1(
    id int primary key,
    username varchar(60) unique,
    email varchar(60) unique not null,
    password varchar(60) unique
);