import React, { useContext } from "react";
import SharedContext from "./SharedContext";

function ListItem({ onSelect, title, active }) {
  const sharedData = useContext(SharedContext);

  const toggleActive = () => {
    onSelect(title);
  };

  return (
    <li
      className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
        active ? "bg-slate-800 text-white" : "bg-white hover:bg-slate-100"
      }`}
      onClick={toggleActive}
    >
      {title} ({sharedData.theme})
    </li>
  );
}

export default ListItem;
