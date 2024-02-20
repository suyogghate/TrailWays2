import React from 'react';
import Happy from '../images/dev/Happy.jpg';
import Suyog from '../images/dev/Suyog_Ghate.jpg';
import { Navbar } from './Navbar';

export const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="container">
      <br/>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4  ">
                  <img src={Suyog} className="img-fluid rounded-start justify-content-around align-items-center" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Suyog Ghate</h5>
                    <p className="card-text">
                        PG-DAC ,IACSD<br></br>
                        PRN : 230941220190<br></br>
                        Contact : 7030830185<br></br>
                        Email : suyoggahteminks@gmail.com
                    </p>
                    <p className="card-text"><small className="text-muted">Full Stack Developer</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4  justify-content-around align-items-center">
                  <img src={Happy} className="img-fluid rounded-start justify-content-around align-items-center" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Praveen Kumar Singh</h5>
                    <p className="card-text">
                        PG-DAC ,IACSD<br></br>
                        PRN : 230941220131<br></br>
                        Contact : 9528013522<br></br>
                        Email : praveenk012340@gmail.com
                    </p>
                    <p className="card-text"><small className="text-muted">Full Stack Developer</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
