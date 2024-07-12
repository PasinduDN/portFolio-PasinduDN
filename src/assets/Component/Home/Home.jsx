import React from 'react';
import imgZ from '../../../assets/react.svg';
import { Button } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="container-lg py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={imgZ}
              className="d-block mx-auto img-fluid"
              alt="React Logo"
              width="400"
              height="200"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="text-center text-lg-start">
              <h1 className="display-5 fw-bold text-primary lh-1 mb-3">Welcome Home</h1>
              <p className="lead">
                Hello! I'm [Your Name], currently working as a Software Engineer Intern at Agrithmics. I thrive on challenges and constantly seek opportunities to enhance my skills through self-study and hands-on experiences.
              </p>
              <p className="lead">
                I am passionate about expanding my knowledge in various domains, including HTML, CSS, Bootstrap, Material UI, Angular, React, C#, .NET, GitHub, and Azure. Keeping up-to-date with the latest industry technologies is a priority for me.
              </p>
              <p className="lead">
                I firmly believe in the power of dedication and continuous effort as the keys to acquiring new skills and achieving success in life.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button variant="contained" color="primary" size="large" className="me-md-2">
                  Primary
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                  Default
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
