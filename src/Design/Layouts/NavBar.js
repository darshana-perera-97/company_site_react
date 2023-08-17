import React from "react";
import companyLogo from "../Assets/companyLogo.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <div >
        <div >
          <div class="col-md-12 d-flex justify-content-center align-items-center">
            <div class="d-flex">
              <img src={companyLogo} alt="company Logo" />
              <h1>Site Name</h1>
            </div>
          </div>
          <div class="col-md-12 mx-5 px-5">
            <div class="row mx-5 px-5">
              <div class="col-sm-3">
                <a href="">Home</a>
              </div>
              <div class="col-sm-3 ">
                <a href="">Pricing</a>
              </div>
              <div class="col-sm-3 ">
                <a href="">Blogs</a>
              </div>
              <div class="col-sm-3 ">
                <a href="">About</a>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
