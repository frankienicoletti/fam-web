import React from 'react';
import Calculator from "../components/Calculator";

export const Calc = props => {
  return (
    <div className="balances-page">
      <Calculator {...props}/>
    </div>
  );
};

export default Calc;
