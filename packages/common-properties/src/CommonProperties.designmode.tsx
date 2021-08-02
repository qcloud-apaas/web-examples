import React from "react";
import Demo from "./Demo";
import properties from "./properties";

const CustomDesignComponent = (props) => {
  return <Demo {...props}></Demo>;
};

CustomDesignComponent.properties = properties;
CustomDesignComponent.defaultProps = {
  name: "name",
  sex: "male",
  age: 11,
  hobbies: "code",
};

export default CustomDesignComponent;
