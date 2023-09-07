import React from "react";
import "./index.scss";
import Linkedinlogo from "../../../images/LI-In-Bug.png";
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GrApps } from "react-icons/gr";
import { TfiUser } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const goToHomePage = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      <img
        className="linkedin-logo-img"
        src={Linkedinlogo}
        alt="linkedin logo"
        onClick={() => goToHomePage("/home")}
      />
      <div className="react-icons">
        <AiOutlineHome size={"30px"} onClick={() => goToHomePage("/home")} />
        <AiOutlineUserAdd size={"30px"} />
        <BsBriefcase size={"30px"} />
        <BiSearch size={"30px"} />
        <AiOutlineMessage size={"30px"} />
        <AiOutlineBell size={"30px"} />
        <GrApps size={"30px"} />
        <TfiUser size={"30px"} onClick={() => goToHomePage("/profile")} />
      </div>
    </div>
  );
};

export default Topbar;
