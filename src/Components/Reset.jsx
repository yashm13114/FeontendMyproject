import React, { useState } from 'react'
import { toast } from 'react-toastify';
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
                // Accept: "application/json",
                // "Access-Control-Allow-Origin": "*",
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
            {/* <div className='mt-24'>
                <div className='flex justify-center'>
                    <h1 className='lg:text-5xl text-4xl'>
                        Please Enter Your Email
                    </h1>
                </div>
                <form action="" method="" >
                    <div className='flex justify-center mt-10'>

                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput2"
                                onChange={(e) => { setMail({ email: e.target.value }) }}
                                name='email'
                                placeholder="Email address" />
                            <label
                                for="exampleFormControlInput2"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                            >Email address
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center mt=5'>
                        <button
                            type="submit"
                            onClick={handleSubmit}

                            className="pl-0 pr-0 hover:rounded-full inline-block  w-1/3  rounded bg-black  pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Submit
                        </button>
                    </div>
                </form>
            </div> */}
        </>
    )
}

export default Reset