import React,{useEffect, useState,useeffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinners = () => {
    const [count , setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        },1000);
        count === 0 && navigate("/login", {
            state: location.pathname,
        })
        return () => clearInterval(interval)
    },[count,navigate, location]);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center"
      style={{height:"100vh"}}
      >
        <h1 className="Text-center">Redirecting you in {count} second </h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    </>
  )
}

export default Spinners
