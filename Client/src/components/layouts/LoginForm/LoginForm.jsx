import React from 'react';

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center font-jost">
            <div className="w-full max-w-100 p-6 ">
                <form className="space-y-6">

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                             Email address *
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                            <input
                                type="checkbox"
                                className="w-4 h-4 mr-2 border-gray-300 rounded focus:ring-0 accent-black"
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="underline decoration-1 underline-offset-4 hover:text-black">
                            Lost password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#1a1a1a] text-white font-bold text-sm tracking-[0.2em] hover:bg-black transition-colors"
                    >
                        LOG IN
                    </button>

                    {/* Footer Link */}
                    <div className="text-center text-gray-600 text-sm mt-4">
                        No account yet?{' '}
                        <a href="#" className="text-black underline decoration-1 underline-offset-4 font-medium">
                            Create Account
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;