import React from "react";
import {Navbar} from './Navbar';
import "./Price.css";
export const Price = () => {
  return (
    <>
    <Navbar></Navbar>
    <br/>
      <div className="demo">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <i className="fa fa-adjust"></i>
                  <div className="price-value">
                    {" "}
                    ₹500.00 <span className="month">/ month</span>{" "}
                  </div>
                </div>
                <h3 className="heading">Standard</h3>
                <div className="pricing-content">
                <ul>
                    <li>
                      <b>5%</b> Discount on 3 Treks
                    </li>
                    <li>
                      <b>1</b> Early Access Pass
                    </li>
                    <li>
                      <b>1</b> Blue Level Guide 
                    </li>
                    <li>
                      <b>1</b> Breakfast Coupon 
                    </li>
                    <li>
                      <b>25%</b> less Yellow Level Guides
                    </li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <i className="fa fa-briefcase"></i>
                  <div className="price-value">
                    {" "}
                    ₹1500.00 <span className="month">/ 3 month</span>{" "}
                  </div>
                </div>
                <h3 className="heading">Business</h3>
                <div className="pricing-content">
                <ul>
                    <li>
                      <b>10%</b> Discount on 5 Treks
                    </li>
                    <li>
                      <b>5</b> Early Access Pass
                    </li>
                    <li>
                      <b>2</b> Blue Level Guides
                    </li>
                    <li>
                      <b>3</b> Breakfast Coupons 
                    </li>
                    <li>
                      <b>50%</b> less Yellow Level Guides
                    </li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <i className="fa fa-diamond"></i>
                  <div className="price-value">
                    {" "}
                    ₹2500.00 <span className="month">/ 6 month</span>{" "}
                  </div>
                </div>
                <h3 className="heading">Premium</h3>
                <div className="pricing-content">
                  <ul>
                    <li>
                      <b>15%</b> Discount on 8 Treks
                    </li>
                    <li>
                      <b>7</b> Early Access Pass
                    </li>
                    <li>
                      <b>2</b> Blue Level Guides / Month
                    </li>
                    <li>
                      <b>2</b> Breakfast Coupons / Month
                    </li>
                    <li>
                      <b>75%</b> less Yellow Level Guides
                    </li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable red">
                <div className="pricingTable-header">
                  <i className="fa fa-cube"></i>
                  <div className="price-value">
                    {" "}
                    ₹4500.00 <span className="month">/ 12 month</span>{" "}
                  </div>
                </div>
                <h3 className="heading">Extra</h3>
                <div className="pricing-content">
                <ul>
                    <li>
                      <b>25%</b> Discount on 12 Treks
                    </li>
                    <li>
                      <b>17</b> Early Access Pass
                    </li>
                    <li>
                      <b>5</b> Blue Level Guides / Month
                    </li>
                    <li>
                      <b>5</b> Breakfast Coupons / Month
                    </li>
                    <li>
                      <b>No</b> Yellow Level Guides
                    </li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="card text-center">
  <div className="card-header">
    No Discount
  </div>
  <div className="card-body">
    <h5 className="card-title">Free Account</h5>
    <p className="card-text">   You will not be able to book Blue Level Guides and no additional feature will be provided !!!</p>
    <a href="/signup" className="btn btn-secondary free">SIGN UP</a>
  </div>
  <div className="card-footer text-muted">
    Thank You For Your Time!!!
  </div>
  </div>
    </>
  );
};
