// import React,{useEffect,useContext} from 'react'
// import {useNavigate} from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import { UserContext } from '../App';
// const Logout = () => {
//     const {state,dispatch} = useContext(UserContext)
//     const navigate = useNavigate();
//     useEffect(()=>{
//         fetch('http://localhost:5000/logout', {
//                 method: 'GET',
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 }
//             }).then((res)=>{
//                 dispatch({type:"USER",payload:false})
//                 localStorage.removeItem('user')
//                 navigate("/Login") 
//                 toast.success("Log Out Successfully", {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: false,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "colored",
//                 })
//                 if(!res.status === 200){
//                     const error = new Error(res.error);
//                     throw error;
//                 }
//             }).catch((err)=>{
//                 console.log(err)
//             })

//     },[])
  
// }

// export default Logout

import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../App';

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch('https://server-yash.onrender.com/logout', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          dispatch({ type: 'USER', payload: false });
          localStorage.removeItem('user');
          navigate('/Login');
          toast.success('Log Out Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } else {
          console.error('Failed to log out');
          const error = new Error('Failed to log out');
          throw error;
        }
      } catch (err) {
        console.error(err);
      }
    };

    logoutUser();
  }, []); // Empty dependency array to run the effect only once on mount

  // Your component should return JSX, make sure to return something here
  return <div>Logging out...</div>;
};

export default Logout;
