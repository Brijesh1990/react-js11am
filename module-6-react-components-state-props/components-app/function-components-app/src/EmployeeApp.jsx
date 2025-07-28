import React from 'react';
const emp = [
  {
    id: 1,
    name: 'Brijesh',
    age: 35,
  },
  {
    id: 2,
    name: 'Kartik',
    age: 25,
  },
  {
    id: 3,
    name: 'Aditya',
    age: 25,
  },
];
function EmployeeApp() {
  return (
    <>
      <div className="app">
        {emp &&
          emp.map((items) => {
            return (
              <>
                <div className="box">
                  <p>
                    <b>Name is :</b>
                    {items.name}
                  </p>
                  <p>
                    <b>Age is :</b>
                    {items.age}
                  </p>
                </div>
              </>
            );
          })}
        <p>
          <b></b>
        </p>
      </div>
    </>
  );
}
export default EmployeeApp;
