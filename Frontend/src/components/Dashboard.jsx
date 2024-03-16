import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) {
    return null;
  }

  return(
    <div>
        <Navbar/>
        <div className="flex flex-row items-center mt-60 justify-center align-middle">
            This is Dashboard Page
        </div>
        <Footer/>
    </div>
)
};

export default Dashboard;
