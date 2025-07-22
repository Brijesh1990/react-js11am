import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import 'animate.css';

// const a = 10;
// const b = 20;
// const c = a + b;
// const d = a - b;
// const e = a * b;

const emp = {
  id: 1,
  name: 'brijesh kumar pandey',
  age: 35,
  departments: 'IT',
  salary: 89500,
};

createRoot(document.getElementById('demo')).render(
  <StrictMode>
    {/* <h1 align="center" style={{ color: 'red', fontSize: '85px' }}>
      Hello world
    </h1> */}

    {/* additions | substractions | multiplications */}

    {/* <h1 style={{ color: 'coral', fontSize: '50px' }}>
      The additions of Numbers is : {c}
    </h1>
    <h2 style={{ color: 'coral', fontSize: '40px' }}>
      The substractions of Numbers is : {d}
    </h2>
    <h3 style={{ color: 'coral', fontSize: '30px' }}>
      The multiplications of Numbers is : {e}
    </h3> */}
    <div className="app">
      <h4>
        Employee Id is : {emp.id} <br />
        Employee Name is : {emp.name} <br />
        employee age is : {emp.age} <br />
        employee salary is :{emp.salary} <br />
        employee departments is : {emp.departments}
      </h4>
    </div>
  </StrictMode>
);
