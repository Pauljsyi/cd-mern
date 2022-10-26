// ========================
// CLASS COMPONENT
// =======================
// import React, { Component } from "react";

// class PersonCard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       age: this.props.age,
//     };
//   }

//   older = () => {
//     // console.log(typeof this.state.age);
//     this.setState({ age: this.state.age + 1 });
//   };

//   render() {
//     return (
//       <>
//         <h1>
//           {this.props.last_name}, {this.props.first_name}
//         </h1>
//         <p>Age: {this.state.age}</p>
//         <button onClick={this.older}>birthday</button>
//         <p>Hair Color: {this.props.hair_color}</p>
//       </>
//     );
//   }
// }
// export default PersonCard;

// ===================
// FUNCTIONAL COMPONENT
// ===================

import React from "react";

const PersonCard = (props) => {
  return (
    <>
      <h1>
        {props.last_name}, {props.first_name}
      </h1>
      <p>Age: {props.age}</p>
      <button>birthday</button>
      <p>Hair Color: {props.hair_color}</p>
    </>
  );
};

export default PersonCard;
