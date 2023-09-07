import React, { useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/common/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  let naviage = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        naviage("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return <>{loading ? <Loader /> : <HomeComponent />}</>;
};

export default Home;
