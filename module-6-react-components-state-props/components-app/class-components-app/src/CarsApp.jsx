import React, { Component } from 'react';
const car = [
  {
    id: 1,
    name: 'mercedes benz',
    model: 1985,
    color: 'white',
    photo:
      'https://cdn.dealeraccelerate.com/cam/34/4528/286687/1920x1440/1985-mercedes-benz-300d',
  },

  {
    id: 2,
    name: 'audi',
    model: 1995,
    color: 'black',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17SgRQzCKRG5_WyMWZbJewsZnA-u1W08v3w&s',
  },

  {
    id: 2,
    name: 'Bently',
    model: 2025,
    color: 'black',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpJ9z9xOzEaN4xjZYI8X_0qcNEriX9MnDiA&s',
  },
];
class CarApp extends Component {
  render() {
    return (
      <>
        <div className="app">
          {car &&
            car.map((item) => {
              return (
                <>
                  <div className="box">
                    <p>
                      <b>Id:</b>
                      {item.id}
                    </p>
                    <p>
                      <b>Name:</b>
                      {item.name}
                    </p>

                    <p>
                      <b>Model:</b>
                      {item.model}
                    </p>
                    <p>
                      <img
                        src={item.photo}
                        alt="photo"
                        style={{ width: '220px', height: '160px' }}
                      />
                    </p>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}
export default CarApp;
