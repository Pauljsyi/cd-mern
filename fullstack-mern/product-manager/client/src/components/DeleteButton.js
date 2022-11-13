import React from "react";
import { Link } from "react-router-dom";

const DeleteButton = (props) => {
  const { handleDelete, id } = props;

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
