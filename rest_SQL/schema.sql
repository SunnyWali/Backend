create table users(
    id varchar(60) primary key,
    name varchar(60) not null,
    email varchar(60) unique not null,
    passsword varchar(60)
)