import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  Aos.init();
  return (
    <>
      <div className="box1">
        <h1>My first AOS Libraries</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed
          cum ipsa quasi quod magnam autem odio nulla! Quibusdam veritatis sequi
          eos quisquam itaque quis aperiam sunt corrupti rem harum!
        </p>

        <p align="center">
          <FaArrowDown className="arrow" />
        </p>

        <hr />
        <h1 align="center">Fade</h1>
        <hr />
      </div>

      <div className="parent">
        <div className="box2" data-aos="fade-up">
          Fade UP
        </div>

        <div className="box3" data-aos="fade-down">
          Fade Down
        </div>

        <div className="box2" data-aos="fade-right">
          Fade right
        </div>

        <div className="box3" data-aos="fade-left">
          Fade Left
        </div>

        <div className="box2" data-aos="fade-up-right">
          Fade up right
        </div>

        <div className="box3" data-aos="fade-up-left">
          Fade up Left
        </div>
      </div>

      <div className="parent">
        <div className="box2" data-aos="flip-left" data-aos-duration="2000">
          Fade UP
        </div>

        <div className="box3" data-aos="flip-right" data-aos-duration="2000">
          Fade Down
        </div>

        <div className="box2" data-aos="flip-up" data-aos-duration="2000">
          Fade right
        </div>

        <div className="box3" data-aos="flip-down" data-aos-duration="2000">
          Fade Left
        </div>

        <div className="box2" data-aos="fade-up-right" data-aos-duration="2000">
          Fade up right
        </div>

        <div className="box3" data-aos="fade-up-left" data-aos-duration="2000">
          Fade up Left
        </div>
      </div>
    </>
  );
}
export default App;
