import React from 'react';
import { FaPlus, FaMinus, FaDivide, FaStar, FaPercent } from 'react-icons/fa';
import { add, subs, mult, md, dv } from './CalLogic';

export default function CalculatorApp() {
  return (
    <>
      <div className="calc-app">
        <h1>Events App</h1>
        <button type="button" onClick={add}>
          Additions <FaPlus />
        </button>
        <button type="button" onClick={subs}>
          Substractions <FaMinus />
        </button>
        <button type="button" onClick={mult}>
          Multiplications <FaStar />
        </button>
        <button type="button" onClick={dv}>
          Divisions <FaDivide />
        </button>
        <button type="button" onClick={md}>
          Modulas <FaPercent />
        </button>
      </div>
    </>
  );
}
