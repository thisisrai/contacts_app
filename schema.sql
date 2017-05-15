DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  street VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  country VARCHAR(50),
  zip INT,
  birthday VARCHAR(50),
  website VARCHAR(50)
);
