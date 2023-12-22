import React, { useEffect, useState, useRef } from 'react';
import { useGlobalContext } from '../context/globalContext';
// import { Table } from 'antd'
import axios, { all } from 'axios';
import { FaEdit } from "react-icons/fa";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { MdDelete } from "react-icons/md";
import Analytics from './Analytics';
import { toast } from 'react-toastify';
import Loader from './Loader';
const ManageExpense = () => {
    const [allTransactions, setallTransactions] = useState([])
    const [transactions, setTransactions] = useState([]);
    const [editable, setEditable] = useState(null);
    const [form] = Form.useForm();
    const [updateForm, setUpdateForm] = useState(null);
    const [loading, setLoading] = useState(false);
    // update values
    const handleEdit = (record) => {
        setEditable(record._id);
        form.setFieldsValue({
            date: record.date,
            amount: record.amount,
            type: record.type,
            category: record.category,
            reference: record.reference,
            description: record.description,
        });
    };

    const handleSave = async (record) => {
        try {
            const updatedTransaction = form.getFieldsValue();
            const res = await fetch(`https://server-yash.onrender.com/update-transaction/${record._id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTransaction),
            });

            if (res.status === 200) {
                toast.success('Updated successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                setEditable(null);
                getAllTransactions();
            } else {
                console.log(`Error: ${res.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancel = () => {
        setEditable(null);
    };

    // get values
    const getAllTransactions = async () => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetch('https://server-yash.onrender.com/get-transaction', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }, { userid: user._id })
            const data = await res.json();
            console.log(data)
            setallTransactions(data)


            if (res.status === 200) {
                console.log("successful")
                setLoading(false);

            } else {
                const error = new Error(res.error);
                throw error;
                setLoading(false);
            }
        } catch (err) {
            console.log("err " + err)
            setLoading(false);


        }

    }
    useEffect(() => {
        getAllTransactions();

    }, [])


    // delete values
    const handleDelete = async (record) => {
        try {
            const res = await fetch(`https://server-yash.onrender.com/delete-transaction/${record._id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }, { transactionId: record._id });

            if (res.status === 200) {
                const data = await res.json();
                toast.success("Deleted successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                })
                navigate('/ManageExpense')
            } else {
                console.log(`Error: ${res.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const columns = [
        {
            title: 'date',
            dataIndex: 'date',
        },
        {
            title: 'amount',
            dataIndex: 'amount'
        },
        {
            title: 'type',
            dataIndex: 'type',

        },
        {
            title: 'category',
            dataIndex: 'category',

        },
        {
            title: 'reference',
            dataIndex: 'reference',

        },
        {
            title: 'description',
            dataIndex: 'description',
        },
        {
            // title: 'Actions',
            // render: (text, record) => <div className='flex cursor-pointer'> <FaEdit onClick={() => handleEdit(record)} /><div className="group">
            //     <p className=" group-hover:text-blue-500"><MdDelete onClick={() => { handleDelete(record) }} /></p>
            //     <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Delete</p>
            // </div>
            //     {editable === record._id && (
            //         <div>
            //             {/* Your form for editing, including input fields for each property */}
            //             <button onClick={() => handleEdit(record)}>Save</button>
            //             <button onClick={() => setEditable(null)}>Cancel</button>
            //         </div>
            //     )}

            // </div>
            title: 'Actions',
            render: (text, record) => <div className='flex cursor-pointer'>
                {editable !== record._id ? (
                    <FaEdit onClick={() => handleEdit(record)} />
                ) : (
                    <Form
                        form={form}
                        initialValues={{
                            date: record.date,
                            amount: record.amount,
                            type: record.type,
                            category: record.category,
                            reference: record.reference,
                            description: record.description,
                        }}
                        onFinish={() => handleSave(record)}
                    >
                        {/* Your form fields go here */}
                        <div className=''>
                            <Form.Item name="date">
                                <Input />
                            </Form.Item>
                            <Form.Item name="amount">
                                <Input />
                            </Form.Item>
                            <Form.Item name="type">
                                <Input />
                            </Form.Item>
                            <Form.Item name="category">
                                <Input />
                            </Form.Item>
                            <Form.Item name="reference">
                                <Input />
                            </Form.Item>
                            <Form.Item name="description">
                                <Input />
                            </Form.Item>
                        </div>
                        {/* ... other form fields ... */}
                        <Form.Item>
                            <Button type="link" htmlType="submit">Save</Button>
                            <Popconfirm title="Sure to cancel?" onConfirm={handleCancel}>
                                <Button type="link">Cancel</Button>
                            </Popconfirm>
                        </Form.Item>
                    </Form>
                )}
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                    <MdDelete />
                </Popconfirm>
            </div>

        }
    ];




    return (
        <>
            {updateForm && (
                <div>
                    {/* Your form for updating, including input fields for each property */}
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setUpdateForm(null)}>Cancel</button>
                </div>
            )}

            <div className='lg:flex lg:justify-center mt-10'>
                <Form form={form} component={false}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className='overflow-x-auto'>
                            <Table dataSource={allTransactions} columns={columns} />
                        </div>
                    )}
                </Form>
            </div>




        </>
    )
}

export default ManageExpense



