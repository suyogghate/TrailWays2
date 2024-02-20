import React from "react";
import {Navbar} from './Navbar';
import "./Price.css";
export const Price = () => {
  return (
    <>
    <Navbar></Navbar>
    <br/>
      <div class="demo">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable">
                <div class="pricingTable-header">
                  <i class="fa fa-adjust"></i>
                  <div class="price-value">
                    {" "}
                    ₹500.00 <span class="month">/ month</span>{" "}
                  </div>
                </div>
                <h3 class="heading">Standard</h3>
                <div class="pricing-content">
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
                <div class="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable green">
                <div class="pricingTable-header">
                  <i class="fa fa-briefcase"></i>
                  <div class="price-value">
                    {" "}
                    ₹1500.00 <span class="month">/ 3 month</span>{" "}
                  </div>
                </div>
                <h3 class="heading">Business</h3>
                <div class="pricing-content">
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
                <div class="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable blue">
                <div class="pricingTable-header">
                  <i class="fa fa-diamond"></i>
                  <div class="price-value">
                    {" "}
                    ₹2500.00 <span class="month">/ 6 month</span>{" "}
                  </div>
                </div>
                <h3 class="heading">Premium</h3>
                <div class="pricing-content">
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
                <div class="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable red">
                <div class="pricingTable-header">
                  <i class="fa fa-cube"></i>
                  <div class="price-value">
                    {" "}
                    ₹4500.00 <span class="month">/ 12 month</span>{" "}
                  </div>
                </div>
                <h3 class="heading">Extra</h3>
                <div class="pricing-content">
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
                <div class="pricingTable-signup">
                  <a href="/signup">sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="card text-center">
  <div class="card-header">
    No Discount
  </div>
  <div class="card-body">
    <h5 class="card-title">Free Account</h5>
    <p class="card-text">   You will not be able to book Blue Level Guides and no additional feature will be provided !!!</p>
    <a href="/signup" class="btn btn-secondary free">SIGN UP</a>
  </div>
  <div class="card-footer text-muted">
    Thank You For Your Time!!!
  </div>
  </div>
    </>
  );
};
