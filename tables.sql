CREATE TABLE cakes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC NOT NULL,
    image VARCHAR NOT NULL,
    description TEXT
);

CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(180) NOT NULL,
    phone VARCHAR(11) NOT NULL
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    clientId INTEGER REFERENCES "clients"("id"),
    cakeId INTEGER REFERENCES "cakes"("id"),
    quantity INTEGER NOT NULL,
    createdAt timestamp NOT NULL default now(),
    totalPrice NUMERIC NOT NULL
);