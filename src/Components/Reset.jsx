import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reset = () => {
    const [mail, setMail] = useState({
        email: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = mail;
        console.log(email);
        fetch("https://server-yash.onrender.com/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                // alert(data.status)
                toast.error(data.status, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                })
            });

    }
    return (
        <>

            <section>
                <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-4xl text-black">Reset password</h2>
                            </div>
                        </div>
                        <form>
                            <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect" />
                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Enter Email   </label>
                                    <input type="email" onChange={(e) => { setMail({ email: e.target.value }) }}
                                        name='email' placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <button type="submit"
                                        onClick={handleSubmit} className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section><br />
        </>
    )
}

export default Reset