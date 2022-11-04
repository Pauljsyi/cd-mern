const express = require("express");
const faker = require("@faker-js/faker");

const app = express();
const port = process.env.port || 8000;

class User {
  constructor(firstName, lastName, email, password, phoneNumber, _id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this._id = _id;
  }
}
const newUser = {
  firstName: faker.faker.name.firstName(),
  lastName: faker.faker.name.lastName(),
  email: faker.faker.internet.email(),
  password: faker.faker.internet.password(),
  phoneNumber: faker.faker.phone.number("###-###-####"),
  _id: faker.faker.datatype.uuid(),
};

class Company {
  constructor(_id, name, address) {
    this._id = _id;
    this.name = name;
    this.address = address;
  }
}
console.log("clg: >>", faker.faker.address.street());
const newCompany = {
  _id: faker.faker.datatype.uuid(),
  name: faker.faker.company.name(),
  address: {
    street: faker.faker.address.street(),
    city: faker.faker.address.city(),
    state: faker.faker.address.state(),
    zipCode: faker.faker.address.zipCode(),
    country: faker.faker.address.country(),
  },
};

let user1 = new User(
  newUser.firstName,
  newUser.lastName,
  newUser.email,
  newUser.password,
  newUser.phoneNumber,
  newUser._id
);

console.log("user1", user1);

let company1 = new Company(newCompany._id, newCompany.name, newCompany.address);

let userArray = [];
let companyArray = [];

console.log("company1", company1);
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

// USER

app.post("/api/users/new", (req, res) => {
  let user1 = new User(
    newUser.firstName,
    newUser.lastName,
    newUser.email,
    newUser.password,
    newUser.phoneNumber,
    newUser._id
  );
  userArray.push(user1);
  res.json({ user1 });
});

// COMPANY
app.post("/api/companies/new", (req, res) => {
  let company1 = new Company(
    newCompany._id,
    newCompany.name,
    newCompany.address
  );
  companyArray.push(company1);
  res.json({ company1 });
});

app.post("/api/user/company", (req, res) => {
  let user1 = new User(
    newUser.firstName,
    newUser.lastName,
    newUser.email,
    newUser.password,
    newUser.phoneNumber,
    newUser._id
  );
  let company1 = new Company(
    newCompany._id,
    newCompany.name,
    newCompany.address
  );

  res.json({ user1, company1 });
});

app.get("");

app.listen(port, () => console.log(`listening on port: ${port}`));
