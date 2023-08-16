import React from "react";

export default function NavBar() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="navbar">
              <h2>Column 1</h2>
              <p>This is content for the first column.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3">
              <h2>Column 1</h2>
              <p>This is content for the first column.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3">
              <h2>Column 2</h2>
              <p>This is content for the second column.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
