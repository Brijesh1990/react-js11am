import React from 'react';
// what is jsx ?
// jsx stands for javascript xml
// jsx stands for javascript syntax extension
// jsx is used to access html elements or html tags inside of react js in form of .jsx i.e called jsx

// what is React js fragments  ?
// access multiple html elements inside of react js we used fragments

// types of fragments
// a) empty tags <></>
// b) <React.Fragment></React.Fragment>
// c) <div></div>

// function should be return a single values
// function BookingApp() {
//   return <h1 align="center">Get elements here</h1>;

//   <h2>Get hading 2</h2>;
// }
// export default BookingApp;

// fragments

// function BookingApp() {
//   return (
//     <>
//       <div
//         style={{
//           width: '50%',
//           height: 'auto',
//           margin: 'auto',
//           padding: '45px',
//           border: 'solid 1px',
//         }}
//       >
//         <h1>Get in touch</h1>
//         <hr />
//         <p>
//           <b>Office Address :</b> 150 feet ring road near jalaram plot-2 above
//           sbi bank
//         </p>
//       </div>
//     </>
//   );
// }
// export default BookingApp;

// function BookingApp() {
//   return (
//     <React.Fragment>
//       <div
//         style={{
//           width: '50%',
//           height: 'auto',
//           margin: 'auto',
//           padding: '45px',
//           border: 'solid 1px',
//         }}
//       >
//         <h1>Get in touch</h1>
//         <hr />
//         <p>
//           <b>Office Address :</b> 150 feet ring road near jalaram plot-2 above
//           sbi bank
//         </p>

//         <p>
//           <b>Email :</b> bkpandey@gmail.com
//         </p>
//       </div>
//     </React.Fragment>
//   );
// }
// export default BookingApp;

function BookingApp() {
  return (
    <div
      style={{
        width: '50%',
        height: 'auto',
        margin: 'auto',
        padding: '45px',
        border: 'solid 1px',
      }}
    >
      <h1>Get in touch</h1>
      <hr />
      <p>
        <b>Office Address :</b> 150 feet ring road near jalaram plot-2 above sbi
        bank
      </p>

      <p>
        <b>Email :</b> bkpandey@gmail.com
      </p>

      <p>
        <b>Email :</b> (+91)-9998003879
      </p>
    </div>
  );
}
export default BookingApp;
