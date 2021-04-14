import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {/* Clonando varios elementos */}
      {
        React.Children.map(props.children, (el) => {
          return cloneElement(el, props)
        })
      }
    </div>
  );
};
