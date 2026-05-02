'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const LoginForm = () => {
    // 'login' thakle login dekhabe, 'register' thakle slide kore register ashbe
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="flex items-center justify-center bg-white overflow-hidden font-jost">

            <div className="relative w-full max-w-137.5 overflow-hidden p-6">
                <div
                    className={`flex w-[210%] transition-transform duration-500 ease-in-out px-6 ${isRegister ? '-translate-x-126' : 'translate-x-0'
                        }`}
                >
                    <div className="w-1/2 pr-6">
                        <form className="space-y-6">
                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Email Address *
                                </label>
                            </div>

                            {/* Password Input (Login style) */}
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Password *
                                </label>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded accent-black" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="underline underline-offset-4">Lost password?</a>
                            </div>

                            <button className="w-full py-4 bg-[#1a1a1a] text-white font-bold text-sm tracking-[0.2em] hover:bg-black transition-colors">
                                LOG IN
                            </button>

                            <div className="text-center text-gray-600 text-sm">
                                No account yet?{' '}
                                <button
                                    type="button"
                                    onClick={() => setIsRegister(true)}
                                    className="text-black underline underline-offset-4 font-medium"
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-1/2 pl-4">
                        <form className="space-y-6">
                            {/* Username */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="username"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Username
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="RegEmail"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="RegEmail"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Email Address *
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                    id="RegPass"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="RegPass"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Password
                                </label>
                            </div>

                            <p className="text-sm text-gray-500">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                            </p>

                            <button className="w-full py-4 bg-[#1a1a1a] text-white font-bold text-sm tracking-[0.2em]">
                                REGISTER
                            </button>

                            <div className="text-center text-gray-600 text-sm">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => setIsRegister(false)}
                                    className="text-black underline underline-offset-4 font-medium"
                                >
                                    Back to Login
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;