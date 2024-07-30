
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
const Profile = () => {
    // const [userDetails, setUserDetails] = useState({});
    // const [LoginUser, setLoginUser] = useState('');
    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user'))
    //     if (user) {
    //         setLoginUser(user)
    //     }

    // }, [])

    // const getUser = async () => {
    //     try {
    //         const user = JSON.parse(localStorage.getItem('user'))
    //         const res = await fetch(`http://localhost:5000/profile/${userId}`, {
    //             method: 'GET',
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             }
    //         }, { userid: user._id })
    //         const data = await res.json();
    //         setUserDetails(user)
    //         console.log(userDetails.email)



    //         if (res.status === 200) {
    //             console.log("successful")

    //         } else {
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //     } catch (err) {
    //         console.log("err " + err)



    //     }

    // }


    // useEffect(() => {
    //     const fetchProfileData = async () => {
    //         try {
    //             // const response = await axios.get('http://localhost:5000/profile');
    //              data = localStorage.getItem('user') // Adjust the URL if needed
    //             console.log(data)
    //             // setUserDetails(response.data);
    //         } catch (error) {
    //             // Handle errors
    //             console.error('Error fetching profile data', error);
    //             // You can also redirect the user or show a message
    //             toast.error('Error fetching profile data');
    //         // Redirect to login page, adjust as needed
    //         }
    //     };

    //     fetchProfileData();
    // }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    return (
        <>
            <div className="container mx-auto mt-8">
                <div className="bg-white p-8 rounded shadow-md">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://placekitten.com/100/100" // Replace with your profile image URL
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h1 className="text-xl font-bold">John Doe</h1>
                            <p className="text-gray-500">Web Developer</p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-600">Email: john.doe@example.com</p>
                        <p className="text-gray-600">Phone: +1 234 567 890</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-2">Bio</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam.
                        </p>
                    </div>
                </div>
                <h1>hello i am yash mehta</h1>
            </div>
            {/* <section className="pt-16 bg-blueGray-50">
                <form action="" method="GET">
                    <div className="w-full lg:w-4/12 px-4 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">

                                <div>
                                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className='h-52 w-52 rounded-full align-middle lg:ml-28 ml-12' alt="" />
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-xl font-semibold leading-normal mb-29 text-blueGray-700 mb-2">
                                        {userDetails.name}


                                    </h3>

                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        {LoginUser.email}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </form>


            </section> */}


        </>
    );
};

export default Profile;

