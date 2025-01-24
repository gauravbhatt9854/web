// import React, { useState } from "react";
// import { GoogleLogin } from "react-google-login";
// import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"; // React Icons
// import axios from "axios";

// const CLIENT_ID_GOOGLE = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Google Client ID
// const CLIENT_ID_GITHUB = "YOUR_GITHUB_CLIENT_ID"; // Replace with your GitHub Client ID
// const REDIRECT_URI_GITHUB = "http://localhost:3000"; // Replace with your redirect URI for GitHub

// const SignInLogin = () => {
//   const [userData, setUserData] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle Google Login Success
//   const handleGoogleLoginSuccess = (response) => {
//     const { profileObj, tokenId } = response;
//     console.log("Google User Data:", profileObj);
//     setUserData({
//       name: profileObj.name,
//       email: profileObj.email,
//       provider: "Google",
//     });
//     // Send `tokenId` to the backend for verification
//   };

//   // Handle Google Login Failure
//   const handleGoogleLoginFailure = (response) => {
//     console.error("Google Login Failed:", response);
//   };

//   // Handle GitHub Login
//   const handleGitHubLogin = async () => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID_GITHUB}&redirect_uri=${REDIRECT_URI_GITHUB}`;
//     window.open(githubAuthURL, "_self"); // Redirect to GitHub OAuth
//   };

//   // Handle Apple Login (You need to include Apple's JS SDK in your HTML)
//   const handleAppleLogin = () => {
//     console.log("Apple Login Clicked");
//     // Apple Sign-In logic with JavaScript SDK
//     // Refer to https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js
//   };

//   // Handle Manual Sign-In
//   const handleManualSignIn = async (e) => {
//     e.preventDefault();
//     console.log("Manual Sign-In Attempt:", { email, password });

//     try {
//       // Replace with your backend API for manual login
//       const response = await axios.post("/api/login", { email, password });
//       const { name } = response.data;
//       setUserData({
//         name,
//         email,
//         provider: "Manual",
//       });
//     } catch (error) {
//       console.error("Manual Sign-In Failed:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
//       <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
//       <p className="text-center text-gray-600 mb-4">login using one of the following methods:</p>

//       {/* Manual Sign-In */}
//       <form className="mb-6" onSubmit={handleManualSignIn}>
//         <div className="flex flex-col gap-3">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
//           >
//             Sign In
//           </button>
//         </div>
//       </form>

//       <div className="flex flex-col gap-4">
//         {/* Google Sign-In */}
//         <GoogleLogin
//           clientId={CLIENT_ID_GOOGLE}
//           render={(renderProps) => (
//             <button
//               onClick={renderProps.onClick}
//               disabled={renderProps.disabled}
//               className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
//             >
//               <FaGoogle className="text-xl" /> Sign in with Google
//             </button>
//           )}
//           onSuccess={handleGoogleLoginSuccess}
//           onFailure={handleGoogleLoginFailure}
//           cookiePolicy={"single_host_origin"}
//         />

//         {/* Apple Sign-In */}
//         <button
//           onClick={handleAppleLogin}
//           className="flex items-center justify-center gap-3 bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition"
//         >
//           <FaApple className="text-xl" /> Sign in with Apple
//         </button>

//         {/* GitHub Sign-In */}
//         <button
//           onClick={handleGitHubLogin}
//           className="flex items-center justify-center gap-3 bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition"
//         >
//           <FaGithub className="text-xl" /> Sign in with GitHub
//         </button>
//       </div>

//       {userData && (
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <h3 className="text-lg font-bold">User Data Captured:</h3>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           <p>Provider: {userData.provider}</p>
//         </div>
//       )}
//     </div>
//   );
// };

const SignInLogin = () => {}

export default SignInLogin;
