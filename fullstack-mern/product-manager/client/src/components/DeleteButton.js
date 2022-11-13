import React from "react";
import { Link } from "react-router-dom";

const DeleteButton = (props) => {
  console.log("delete button", props);
  const { handleDelete, id } = props;
  console.log(id);

  return (
    <button>
      <Link
        id={id}
        onClick={(e) => {
          handleDelete(id);
        }}
      >
        delete
      </Link>
    </button>
  );
};

export default DeleteButton;
