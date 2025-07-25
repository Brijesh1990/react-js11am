import React from 'react';

// single objects data
// const emp = {
//   id: 1,
//   name: 'brijesh',
//   age: 35,
//   departments: 'IT',
// };

// function EmployeeDetails() {
//   return (
//     <>
//       <div>
//         <h1>Employee details here</h1>
//         <div>
//           <p>
//             <b>Employee Id is :</b>
//             {emp.id}
//           </p>
//           <p>
//             <b>Employee Name :</b>
//             {emp.name}
//           </p>

//           <p>
//             <b>Employee age is :</b>
//             {emp.age}
//           </p>
//           <p>
//             <b>Employee departments is :</b>
//             {emp.departments}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EmployeeDetails;

const emp = [
  {
    id: 1,
    name: 'brijesh',
    age: 35,
    departments: 'IT',
    photo:
      'https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    name: 'Bhoomi',
    age: 25,
    departments: 'CSE',
    photo:
      'https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 3,
    name: 'Vijay',
    age: 21,
    departments: 'HR',
    photo:
      'https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 4,
    name: 'Avtar',
    age: 22,
    departments: 'Seniour software Engineer',
    photo:
      'https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 5,
    name: 'Aditya',
    age: 25,
    departments: 'CEO | CFO',
    photo:
      'https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?semt=ais_hybrid&w=740',
  },

  {
    id: 6,
    name: 'kartik',
    age: 25,
    departments: 'CEO | CFO',
    photo:
      'https://as1.ftcdn.net/jpg/05/51/39/96/1000_F_551399625_dUFhYBB9TGAZU7fHoInuQoZuFTHuFA77.jpg',
  },
];

function EmployeeDetails() {
  return (
    <>
      <div>
        <h1 align="center">Employee details here</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {emp.map((items) => {
            return (
              <>
                <div
                  style={{
                    width: '30%',
                    height: 'auto',
                    margin: '2px',
                    padding: '10px',
                    border: 'solid 1px',
                  }}
                >
                  <p>
                    <img
                      src={items.photo}
                      alt="photo"
                      style={{
                        width: '150px',
                        height: '120px',
                        borderRadius: '50%',
                      }}
                    />
                  </p>
                  <p>
                    <b>Id is :</b>
                    {items.id}
                  </p>
                  <p>
                    <b>Name is :</b>
                    {items.name}
                  </p>

                  <p>
                    <b>Age is :</b>
                    {items.age}
                  </p>

                  <p>
                    <b>Departements is :</b>
                    {items.departments}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
