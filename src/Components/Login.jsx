// import React, { useState, useContext } from 'react'
// import {
//     Input,
//     Ripple,
//     initTE,
// } from "tw-elements";
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';
// import Loader from './Loader';
// const Login = () => {
//     initTE({ Input, Ripple });
//     const { state, dispatch } = useContext(UserContext)
//     const navigate = useNavigate()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [loading, setLoading] = useState(false);

//     const LoginUser = async (e) => {
//         e.preventDefault();
//         setLoading(true); // Set loading to true when login is initiated

//         try {
//             const res = await fetch('https://server-yash.onrender.com/login', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ email, password })
//             })

//             const data = await res.json()

//             if (res.status === 400 || !data) {
//                 toast.error("Invalid Credentials")
//             } else {
//                 if (email !== email || password !== password) {
//                     toast.error("Invalid Credentials", {
//                         position: "top-right",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "colored"
//                     })
//                 } else {
//                     dispatch({ type: "USER", payload: true })
//                     localStorage.setItem('user', JSON.stringify({ ...data, password, email }))
//                     toast.success("Login Successfully 🤩", {
//                         position: "top-right",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "colored",
//                     })
//                     navigate("/Dashboard")
//                 }
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//             toast.error("An error occurred during login");
//         } finally {
//             setLoading(false); // Set loading back to false after login attempt
//         }
//     }

//     return (
//         <>
//             <section className="h-screen">
//                 <div className="container h-full px-6 py-24">
//                     <div
//                         className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//                         <div
//                             className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">

//                             <img
//                                 src="https://cdn.dribbble.com/users/2500979/screenshots/6486096/dribbble_gif_login.gif"
//                                 className="w-96 lg:block hidden  mx-auto"
//                                 alt="Sample image" />
//                         </div>
//                         <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
//                             <form action="" method="POST">
//                                 <h1 className='text-5xl flex justify-center mb-10'>Login</h1>
//                                 <div className="relative mb-6 mt-8" data-te-input-wrapper-init>

//                                     <input
//                                         type="email"
//                                         className="peer block min-h-[auto] w-full rounded 0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                         id="exampleFormControlInput2"
//                                         name='email'
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         placeholder="Email address" />
//                                     <label
//                                         htmlFor="exampleHtmlformControlInput3"
//                                         className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
//                                     >Email address
//                                     </label>
//                                 </div>

//                                 <div className="relative mb-6 mt-8" data-te-input-wrapper-init>

//                                     <input
//                                         type="password"
//                                         className="peer block min-h-[auto] w-full rounded 0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                         id="exampleFormControlInput2"
//                                         name='password'
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Password" />

//                                     <label
//                                         htmlFor="exampleHtmlformControlInput33"
//                                         className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
//                                     >Password
//                                     </label>
//                                 </div>

//                                 <div className="mb-6 flex items-center justify-between">



//                                     {/* <a href="/Reset" className='text-blue-400'>Forgot password?</a> */}
//                                     <Link to="/Reset" className='text-blue-400'>Forgot password?</Link>

//                                 </div>

//                                 {/* <p className='flex justify-center'>Don't have an account?<a href="/Register">Register</a></p> */}
//                                 <p className='flex justify-center'>Don't have an account?<Link to="/Register">Register</Link></p>

//                                 <div className="grid justify-center">
//                                     {loading ? (
//                                         <Loader />
//                                     ) : (
//                                         <button
//                                             type="submit"
//                                             onClick={LoginUser}
//                                             className="relative w-52 px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
//                                         >
//                                             Login
//                                         </button>
//                                     )}
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Login


import React, { useState, useContext } from 'react'
import {
    Input,
    Ripple,
    initTE,
} from "tw-elements";
import Navbar from './Navbar'
import '../App.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { UserContext } from '../App';
import BannedPage from './BannedPage';
const Login = () => {
    initTE({ Input, Ripple });
    const { state, dispatch } = useContext(UserContext)
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const navigate = useNavigate()
    // for login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // for register
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    })
    const [expanded, setExpanded] = useState(true)
    let name, value;
    if (wrongAttempts >= 5) {
        // toast.error("Too many wrong attempts. You are temporarily banned for 10 minutes.", {
        //     // ... (your toast configuration)
        // });
    
        setTimeout(() => {
            // Reset wrong attempts after 10 minutes
            setWrongAttempts(0);
        }, 600000); // 10 minutes in milliseconds
        return <BannedPage />;
    }
    const LoginUser = async (e) => {
        e.preventDefault();
        setLoginLoading(true);// Set loading to true when login is initiated
        if (wrongAttempts >= 5) {
        
    
            setTimeout(() => {
                // Reset wrong attempts after 10 minutes
                setWrongAttempts(0);
            }, 600000); // 10 minutes in milliseconds
            return <BannedPage />;
        }
        try {
            const res = await fetch('https://server-yash.onrender.com/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (res.status === 400 || !data) {
                toast.error("Invalid Credentials")
                setWrongAttempts(wrongAttempts + 1);
   
            } else {
                if (email !== email || password !== password) {
                    toast.error("Invalid Credentials", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    })
                    setWrongAttempts(wrongAttempts + 1);
   
                } else {
                    setWrongAttempts(0);
                    dispatch({ type: "USER", payload: true })
                    localStorage.setItem('user', JSON.stringify({ ...data, password, email }))
                    toast.success("Login Successfully 🤩", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    navigate("/Dashboard")
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("An error occurred during login");
        } finally {
            setLoginLoading(false); // Set loading back to false after login attempt
        }
    }

    // for register
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
  
        const { name, email, password, cpassword } = user;

        if (!name || !email || !password || !cpassword) {
            toast.error("Please fill all the fields", {
                // ... (your toast configuration)
            });
        } else {
            if (password !== cpassword) {
                toast.error("Password should be match", {
                    // ... (your toast configuration)
                });
            } else {
                try {
                    setRegisterLoading(true);
                    const res = await fetch('https://server-yash.onrender.com/register', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name, email, password, cpassword
                        })
                    })
                    const data = await res.json()

                    if (data.status) {
                        toast.error(data.status, {
                            // ... (your toast configuration)
                        });
                    } else {
                        // Reset user state after successful registration
                        dispatch({ type: "USER", payload: false });
                        localStorage.setItem('user', JSON.stringify({ ...data, name, password, email }))
                        setRegistrationMessage("Registration completed. Please login to continue");
                        toast.success("Register successfully", {
                            // ... (your toast configuration)
                        })

                        console.log("register successfully");
                    }
                } catch (error) {
                    console.error('Error during registration:', error);
                    // Handle error during registration
                } finally {
                    setRegisterLoading(false); // Set register loading back to false after register attempt
                }
            }
        }
    }



    return (
        <>

            <section className="h-screen">
                <div className="container h-full px-6 py-24">

                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-evenly">

                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">

                            <img
                                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
                                className="w-[500px] lg:block hidden  mx-auto "
                                alt="Sample image" />
                        </div>

                        <div className="main w-[400px] lg:max-h-[514px] md:max-h-[500px] max-h-[490px]">



                            <input type="checkbox" id="chk" aria-hidden="true" />

                            <div className="login">
                                <form className="form">
                                    <label for="chk" aria-hidden="true">Login</label>
                                    <input className="input" type="email" name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="" />
                                    <input className="input" type="password" name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" />
                                    {loginLoading ? (
                                        <Loader />
                                    ) : (

                                        <button type='submit' onClick={LoginUser} className='bg-white hover:text-white hover:bg-gray-700'>Log in</button>
                                    )}
                                </form>
                            </div>

                            <div className="register lg:h-[437px] md:h-[440px] h-[430px] pb-10">
                                {registrationMessage && (
                                    <div className="grid justify-center mt-5">
                                        <h1 className='text-black text-sm pr-1 pl-1'> {registrationMessage}</h1>

                                    </div>
                                )}
                               
                             
                                <form className="form">
                                    <label for="chk" aria-hidden="true">Register</label>
                                    <input className="input" type="text" value={user.name}
                                        name='name'
                                        onChange={handleInputs} placeholder="Username" required="" />
                                    <input className="input" type="email" value={user.email}
                                        name='email'
                                        onChange={handleInputs} placeholder="Email" required="" />
                                    <input className="input" type="password" value={user.password}
                                        name='password'
                                        onChange={handleInputs} placeholder="Password" required="" />
                                    <input className="input" type="password" value={user.cpassword}
                                        name='cpassword'
                                        onChange={handleInputs} placeholder="Password" required="" />
                                    {registerLoading ? (
                                        <Loader />
                                    ) : (

                                        <button type='submit' onClick={postData} className='bg-black text-white hover:text-black hover:bg-white'>Register</button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

        </>
    )
}

export default Login