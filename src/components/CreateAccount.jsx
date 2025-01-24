// import React, { useState } from "react";
// import { GoogleLogin } from "react-google-login";
// import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"; // React Icons
// import axios from "axios";

// const CLIENT_ID_GOOGLE = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Google Client ID
// const CLIENT_ID_GITHUB = "YOUR_GITHUB_CLIENT_ID"; // Replace with your GitHub Client ID
// const REDIRECT_URI_GITHUB = "http://localhost:3000"; // Replace with your redirect URI for GitHub

// const CreateAccount = () => {
//     const [userData, setUserData] = useState(null);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [name, setName] = useState(""); // New state for name
//     const [profilePic, setProfilePic] = useState(null); // New state for profile picture
//     const [errorMessage, setErrorMessage] = useState("");

//     // Handle Google Sign-Up Success
//     const handleGoogleSignUpSuccess = (response) => {
//         const { profileObj } = response;
//         console.log("Google User Data:", profileObj);
//         setUserData({
//             name: profileObj.name,
//             email: profileObj.email,
//             provider: "Google",
//             profilePic: profileObj.imageUrl, // Profile picture URL from Google
//         });
//         // Send data to backend for account creation (tokenId, profileObj)
//     };

//     // Handle Google Sign-Up Failure
//     const handleGoogleSignUpFailure = (response) => {
//         console.error("Google Sign-Up Failed:", response);
//     };

//     // Handle GitHub Sign-Up
//     const handleGitHubSignUp = async () => {
//         const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID_GITHUB}&redirect_uri=${REDIRECT_URI_GITHUB}`;
//         window.open(githubAuthURL, "_self"); // Redirect to GitHub OAuth
//     };

//     // Handle Apple Sign-Up (You need to include Apple's JS SDK in your HTML)
//     const handleAppleSignUp = () => {
//         console.log("Apple Sign-Up Clicked");
//         // Apple Sign-In logic with JavaScript SDK
//         // Refer to https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js
//     };

//     // Handle Manual Account Creation
//     const handleManualSignUp = async (e) => {
//         e.preventDefault();
//         setErrorMessage("");

//         // Validation checks
//         if (password !== confirmPassword) {
//             setErrorMessage("Passwords do not match.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("email", email);
//         formData.append("password", password);
//         formData.append("name", name);
//         if (profilePic) {
//             formData.append("profilePic", profilePic);
//         }

//         try {
//             // Replace with your backend API for manual account creation
//             const response = await axios.post("/api/signup", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             const { name } = response.data;

//             setUserData({
//                 name,
//                 email,
//                 provider: "Manual",
//                 profilePic: response.data.profilePic || null, // Optional profile pic from backend
//             });

//             // Redirect or display a success message after successful account creation
//         } catch (error) {
//             console.error("Manual Account Creation Failed:", error.response?.data || error.message);
//             setErrorMessage("Account creation failed. Please try again.");
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
//             <h1 className="text-2xl font-bold text-center mb-6">Create a New Account</h1>
//             <p className="text-center text-gray-600 mb-4">Sign up using one of the following methods:</p>

//             {/* Manual Sign-Up Form */}
//             <form className="mb-6" onSubmit={handleManualSignUp}>
//                 <div className="flex flex-col gap-3">
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                         required
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                         required
//                     />
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setProfilePic(e.target.files[0])}
//                         className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//                     />
//                     {errorMessage && (
//                         <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
//                     )}
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
//                     >
//                         Sign Up
//                     </button>
//                 </div>
//             </form>

//             <div className="flex flex-col gap-4">
//                 {/* Google Sign-Up */}
//                 <GoogleLogin
//                     clientId={CLIENT_ID_GOOGLE}
//                     render={(renderProps) => (
//                         <button
//                             onClick={renderProps.onClick}
//                             disabled={renderProps.disabled}
//                             className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
//                         >
//                             <FaGoogle className="text-xl" /> Sign up with Google
//                         </button>
//                     )}
//                     onSuccess={handleGoogleSignUpSuccess}
//                     onFailure={handleGoogleSignUpFailure}
//                     cookiePolicy={"single_host_origin"}
//                 />

//                 {/* Apple Sign-Up */}
//                 <button
//                     onClick={handleAppleSignUp}
//                     className="flex items-center justify-center gap-3 bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition"
//                 >
//                     <FaApple className="text-xl" /> Sign up with Apple
//                 </button>

//                 {/* GitHub Sign-Up */}
//                 <button
//                     onClick={handleGitHubSignUp}
//                     className="flex items-center justify-center gap-3 bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition"
//                 >
//                     <FaGithub className="text-xl" /> Sign up with GitHub
//                 </button>
//             </div>

//             {userData && (
//                 <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//                     <h3 className="text-lg font-bold">Account Created:</h3>
//                     <p>Name: {userData.name}</p>
//                     <p>Email: {userData.email}</p>
//                     <p>Provider: {userData.provider}</p>
//                     {userData.profilePic && (
//                         <img
//                             src={userData.profilePic}
//                             alt="Profile"
//                             className="mt-4 w-24 h-24 rounded-full object-cover"
//                         />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

const CreateAccount = () => {}

export default CreateAccount;