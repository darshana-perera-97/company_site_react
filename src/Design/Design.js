import React from "react";
import MainBanner from "./Layouts/MainBanner";
import NavBar from "./Layouts/NavBar";

export default function Design() {
  return (
    <div class="container">
      <div class="row">
        <NavBar />
        <MainBanner />
      </div>
    </div>
  );
}
