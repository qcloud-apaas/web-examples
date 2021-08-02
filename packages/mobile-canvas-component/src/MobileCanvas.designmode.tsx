import React from 'react';
import Demo from './Demo';
import properties from './properties';

const CustomRunComponent = (props) => {
  return <Demo {...props}></Demo>;
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
