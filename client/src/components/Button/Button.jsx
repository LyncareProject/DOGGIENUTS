import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        className={props.className}
        onClick={props.onClick}
        onChange={props.onChange}
      >
        {props.title}
      </button>
    </div>
  );
}
