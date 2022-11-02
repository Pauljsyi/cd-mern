import React, { useContext } from "react";
import MyContext from "../context/context";
const BodyParagraph = () => {
  const context = useContext(MyContext);
  console.log("this is context from bodyparagraph:  ", context);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {context.title} </td>
            <td> {context.author} </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BodyParagraph;
