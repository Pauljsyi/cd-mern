// const person = { 
//   firstName: 'Bob', 
//   lastName: 'Marley', 
//   email: 'bob@marley.com', 
//   password: 'sekureP@ssw0rd9', 
//   username: 'barley', 
//   createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// // BEFORE ES6
// // var email = person.email;
// // var firstAnimal = animals[0];

// // AFTER ES6
// // const {email, password} = person; //--> destructuring objects keywords must match key names
// // console.log(email, password) //--> bob@marley.com sekureP@ssw0rd9

// // const [x,y,z,a,b,c] = animals; // --> keywords in a destructured array will reference the index position
// // console.log(a); //--> a = 'horse'


// // const hashedPassword = person.password;
// // const { hashedPassword } = person;

// const password = '12345';
// const { password: hashedPassword } = person;

// console.log(hashedPassword)

// ===================================================================================================================

const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
};

const {addresses: [whiteHouse, sherlock]} = person;

console.log(whiteHouse, " and ", sherlock);