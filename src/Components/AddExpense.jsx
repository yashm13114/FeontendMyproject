import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';
import  '../App.css';
const AddExpense = ({ thisYearExpense, income }) => {
    const [expense, setExpense] = useState({
        amount: "", type: "", category: "", reference: "", description: "", date: ""
    })
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        const remainingIncomeAfterExpense = income - thisYearExpense - parseFloat(value);

        if (remainingIncomeAfterExpense < 0.7 * income) {
            // Show a warning message or take any action
            alert("Warning: You have used 70% of your income. Are you sure you want to spend?");
        }

        if (remainingIncomeAfterExpense <= 0) {
            // Disable the form and show a message
            setIsFormDisabled(true);
            alert("You have used 100% of your income. Form disabled.");
        } else {
            // Enable the form if the user has not spent 100%
            setIsFormDisabled(false);
        }

        setExpense({ ...expense, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();

        const { amount, type, category, reference, description, date } = expense


        if (!amount || !type || !category || !reference || !description || !date) {
            toast.error("Please fill all the fields", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

        } else {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetch('https://server-yash.onrender.com/add-transaction', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount, type, category, reference, description, date
                }),

            }, { ...e, userid: user._id })

            const data = await res.json()
            toast.success("Transaction Added Successfully ", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })



        }
    }


    const remainingIncome = income - thisYearExpense;
    const remainingIncomeThreshold = 0.1 * income; // 10% threshold
    return (
        <>
            <section>
                <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="flex text-4xl text-black">Add Your Expense/Income</h2>
                            </div>
                        </div>
                        <form method='post' onSubmit={postData}>

                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Amount(₹)   </label>
                                    <input value={expense.amount} onChange={handleInputs} type="text" placeholder="" name='amount' className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Type   </label>
                                    <select value={expense.type} onChange={handleInputs} name='type' className="bg-gray-100 border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                                        <option value="">--select--</option>
                                        <option value="Expense">Expense</option>
                                        <option value="Income">Income</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Category   </label>
                                    <select value={expense.category} onChange={handleInputs} name='category' className="bg-gray-100 border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                                        <option value="">--select--</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Tip">Tip</option>
                                        <option value="Project">Project</option>
                                        <option value="Salary">Salary</option>
                                        <option value="Food">Food</option>
                                        <option value="Movie">Movie</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Reference  </label>
                                    <input value={expense.reference} onChange={handleInputs} name='reference' type="text" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">Description  </label>
                                    <input value={expense.description} onChange={handleInputs} name='description' type="text" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Date  </label>
                                    <input value={expense.date} onChange={handleInputs} name='date' type="date" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <>
                                        <button
                                            type="submit"
                                            disabled={isFormDisabled}
                                            className={`items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black`}
                                        >
                                            Submit your request
                                        </button>
                                        
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddExpense