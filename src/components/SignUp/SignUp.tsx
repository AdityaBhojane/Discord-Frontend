import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-2">Welcome back!</h2>
                    <p className="text-[#B9BBBE] mb-8">We're so excited to see you again!</p>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-[#B9BBBE] mb-2" htmlFor="email">
                            USERNAME 
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 text-[#B9BBBE] bg-[#202225] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-[#B9BBBE] mb-2" htmlFor="email">
                            EMAIL 
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full px-3 py-2 text-[#B9BBBE] bg-[#202225] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-[#B9BBBE] text-sm font-bold mb-2" htmlFor="password">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 text-[#B9BBBE] rounded-sm bg-[#202225]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* <div className="mb-4 text-right">
                        <a href="#" className="text-blue-400 hover:underline">
                            Forgot your password?
                        </a>
                    </div> */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#5865F2] text-white font-bold rounded-sm hover:bg-[#3744d3]"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4">
                    <span className="text-[#B9BBBE]">
                        Already have an account? <span onClick={()=>navigate('/signin')} className='text-blue-400 mx-2 hover:underline cursor-pointer'>Login</span> 
                    </span>
                </div>
            </div>
        </>
    );
};

export default SignUp;
