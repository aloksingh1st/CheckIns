import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListCard = () => {
  return (
    <>
      <div
        className=" flex border-2 md:w-[38rem] mb-4 p-2 rounded "
        style={{ justifyContent: "space-between" }}
      >
        <h2 className="font-bold p-2">Hello</h2>
        <div className="p-2">
          <FontAwesomeIcon icon={faPenToSquare} className="mx-3" />
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </>
  );
};

export default ListCard;
