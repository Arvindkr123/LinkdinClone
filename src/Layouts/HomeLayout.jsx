import React from "react";
import Home from "../Pages/Home";
import Topbar from "../Components/common/Topbar";

const HomeLayout = () => {
  return (
    <div
      style={{ width: "100%", height: "100vh", backgroundColor: "whitesmoke" }}
    >
      <Topbar />
      <Home />
    </div>
  );
};

export default HomeLayout;
