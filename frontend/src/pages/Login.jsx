import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate login
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Login functionality coming soon!');
        }, 1500);
    };

    return (
        <div>
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">


            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50"></div>
                <div className="relative p-8 sm:p-10">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-900/20 border border-gray-600/30">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-400">Please sign in to your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 pl-12 border-2 border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-600/50 focus:border-gray-500 focus:bg-gray-800 text-white placeholder-gray-500 sm:text-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                                <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-white" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-semibold text-gray-300">Password</label>
                                <a href="#" className="text-xs text-gray-400 hover:text-white font-medium hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 pl-12 border-2 border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-600/50 focus:border-gray-500 focus:bg-gray-800 text-white placeholder-gray-500 sm:text-sm"
                                    placeholder="Enter your password"
                                    required
                                />
                                <Lock className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-white" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-gradient-to-r from-gray-200 to-white text-black font-bold py-4 px-6 rounded-xl hover:from-white hover:to-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-600/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Signing In...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <a href="#" className="font-bold text-white hover:text-gray-200 hover:underline transition-colors duration-300">
                                Create Account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;