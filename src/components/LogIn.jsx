import React, { useState } from "react";
import CreateAccount from "./CreateAccount"; // Import CreateAccount component
import SignInLogin from "./SignInLogin"; // Import SignInLogin component

const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(true); // State to toggle between SignUp and SignIn

    const toggleAuthMode = () => {
        setIsSignUp((prevMode) => !prevMode); // Toggle between sign up and sign in
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
                {/* Toggle Button */}
                <button
                    onClick={toggleAuthMode}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md mb-4 transition-all transform hover:scale-105 hover:bg-blue-600 hover:text-gray-100 text-lg font-semibold duration-300"
                >
                    {isSignUp ? "Sign In" : "Create Account"}
                </button>



                {/* Toggle Between CreateAccount and SignInLogin */}
                {isSignUp ? <CreateAccount /> : <SignInLogin />}
            </div>
        </div>
    );
};

export default LogIn;
