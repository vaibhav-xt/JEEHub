'use client'
import React, { useState } from 'react';

interface FormDataType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Page = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className='grid place-content-center h-screen'>
            <form className="bg-white p-8 rounded-xl" onSubmit={handleSubmit}>
                <h1 className='text-2xl pb-4 text-center font-bold text-dark-purple'>Sign Up</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-dark-purple" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border border-dark-purple rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-dark-purple" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border border-dark-purple rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-dark-purple" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-dark-purple rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder='Password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-dark-purple" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border border-dark-purple rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
