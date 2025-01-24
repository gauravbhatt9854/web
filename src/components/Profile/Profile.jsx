import React, { useEffect, useRef, useState } from "react";
import { usersData } from "../ProjectPage/store";

const Profile = () => {

  const clientRoute = location.pathname.includes("talent-profile");
  const lang = "ar";
  // const [imgUrl, setimgUrl] = useState(null);
  // const [progress, setprogress] = useState(0);
  const [profileTitle, setprofileTitle] = useState("");
  const [profileOverview, setprofileOverview] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [inputVal, setinputVal] = useState("");
  const [EmpTitle, setEmpTitle] = useState("");
  const [EmpCompany, setEmpCompany] = useState("");
  const [EmpStillWork, setEmpStillWork] = useState(false);
  let [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false); // Toggle for edit mode
  const fileInputRef = useRef("");
  const [CertTitle, setCertTitle] = useState("");
  const [CertInstitution, setCertInstitution] = useState("");
  const [SocialPlatform, setSocialPlatform] = useState("");
  const [SocialLink, setSocialLink] = useState("");
  const [imgFile, setImgFile] = useState(null); // Store the uploaded file

  useEffect(() => {
    // Mock data for the user profile (replace with actual API call)
    setUser(usersData[0]);
  }, []);

  useEffect(() => {
    if (user) {
      setprofileOverview(user.overview);
      setprofileTitle(user.title);
    }
  }, [user]);


  const addSkill = () => {
    if (inputVal !== "") {
      // api call
      console.log(" :", inputVal)
      // api call
      setinputVal(""); // Clear the input after adding
    }
  };

  const addExperience = () => {
    if (EmpTitle && EmpCompany) {
      const newExperience = { jobTitle: EmpTitle, companyName: EmpCompany, stillWork: EmpStillWork };
      // api call
      console.log("new experience added ", newExperience)
      setEmpTitle(""); // Clear after adding
      setEmpCompany(""); // Clear after adding
      setEmpStillWork(false); // Reset checkbox if necessary
    }
  };

  // Handle the file input and preview the image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
    }
  };

  // Add portfolio item function
  const addPortfolioItem = () => {
    if (imgTitle !== "" && imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgDataUrl = reader.result; // Base64 encoded image URL
        const newPortfolioItem = { image: imgDataUrl, imagetitle: imgTitle };
        setportfolioList([...portfolioList, newPortfolioItem]);
        setImgTitle(""); // Clear input after adding
        setImgFile(null); // Reset the file input
      };
      reader.readAsDataURL(imgFile); // Convert the image to base64 string
    }
  };


  const addCertification = () => {
    // Add logic to update certifications array
    console.log("New Certification:", { CertTitle, CertInstitution });
  };

  const addSocialMedia = () => {
    // Add logic to update social media accounts array
    console.log("New Social Media:", { SocialPlatform, SocialLink });
  };

  const handleSaveOverview = () => {
    // make a api call for changing overview
    console.log(profileOverview)
  }
  const handleProfileTitle = () => {
    // make a api call for changing overview
    console.log(profileTitle)
  }

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File:", file);
      // Preview or store the selected file
    }

    // make a api call
  };

  const [Time, setTime] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes are less than 10
    const currentTime = `${currentDate.toLocaleDateString()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    setTime(currentTime);
  }, []);

  return (
    <div className="container mt-10 bg-white shadow-xl rounded-xl">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-4 mb-4">
        <div className="flex items-center space-x-6">
          {/* Profile Photo */}
          <div className="relative">
            <img
              src={user?.profilePhoto}
              alt="Profile"
              className={`w-16 h-16 rounded-full object-cover border-2 ${editMode ? "cursor-pointer hover:opacity-80" : ""
                }`}
              onClick={() => editMode && fileInputRef.current.click()}
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleProfilePhotoChange}
                className="hidden"
              />
            )}
          </div>
          {/* User Info */}
          <div>
            <h1 className="text-3xl font-semibold">{user?.firstName + " " + user?.lastName}</h1>
            <p className="text-sm text-gray-600">
              {user?.location.city}, {user?.location.country} - <span>{Time}</span>
            </p>
          </div>
        </div>
        {/* Edit Mode Toggle */}
        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <button
            onClick={() => setEditMode((prev) => !prev)}
            className={`px-5 py-2 ${editMode ? "bg-orange-500" : "bg-green-500"} text-gray-800 rounded-lg`}
          >
            {editMode ? "Public View" : "Private View"}
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-6">Promote Your Profile</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Availability Badge</span>
              <button className={`text-blue-500 hover:underline ${editMode ? '' : 'hidden'}`}>Edit</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Boost Your Profile</span>
              <button className={`text-blue-500 hover:underline ${editMode ? '' : 'hidden'}`}>Edit</button>
            </li>
          </ul>
          <div className="mt-8">
            <p>Connects: <strong>0</strong></p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-blue-500 hover:underline">random feature 1 </button>
              <button className="text-blue-500 hover:underline">random feature 2 </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 p-6">
          {/* Profile Title */}
          <div className="flex justify-between items-center mb-6 relative">
            <div>
              {editMode ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={profileTitle}
                    onChange={(e) => setprofileTitle(e.target.value)}
                    className="text-2xl font-semibold border-b-2 p-2"
                    placeholder="Add Title"
                  />
                  <button
                    onClick={handleProfileTitle}
                    className="bg-blue-500 text-white rounded-lg absolute right-0 bottom-0 mr-2 mb-2 p-1"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <h2 className="text-2xl font-semibold">{user?.title}</h2>
              )}
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-8 relative">
            <h3 className="text-xl font-bold mb-4">Overview</h3>
            {editMode ? (
              <div>
                <textarea
                  name="overview"
                  value={profileOverview}
                  onChange={(e) => setprofileOverview(e.target.value)}
                  className="w-full p-5 border rounded-lg pr-10"
                  placeholder="Write about yourself..."
                />
                {/* Save Button */}
                <button
                  onClick={handleSaveOverview}
                  className="bg-blue-500 text-white rounded-lg absolute right-0 bottom-0 mr-2 mb-2 p-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-gray-700">{user?.overview}</p>
            )}
          </div>


          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {user?.skills?.map((skill, index) => (
                <span key={index} className="bg-gray-200 px-4 py-2 rounded-full text-sm">{skill}</span>
              ))}
            </div>
            {editMode && (
              <div className="mt-4">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setinputVal(e.target.value)}
                  className="border p-2 rounded-lg w-full"
                  placeholder="Add new skill"
                />
                <button onClick={addSkill} className="px-5 py-2 text-white rounded-lg hover:underline bg-orange-500 mt-2">Add Skill</button>
              </div>
            )}
          </div>

          {/* Portfolio Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {user?.portfolio?.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.imagetitle}
                    className="w-32 h-32 object-cover rounded-md shadow-sm"
                  />
                  <p>{item.imagetitle}</p>
                </div>
              ))}
            </div>
            {editMode && (
              <div className="mt-6">
                <input
                  type="text"
                  onChange={(e) => setImgTitle(e.target.value)}
                  className="border p-2 rounded w-full"
                  placeholder="Portfolio Image Title"
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border p-2 rounded w-full mt-2"
                  accept="image/*"
                />
                <button
                  onClick={addPortfolioItem}
                  className="px-5 py-2 text-white rounded-lg hover:underline bg-rose-500 mt-2"
                >
                  Add Portfolio Item
                </button>
              </div>
            )}
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Work Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user?.company?.map((exp, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white shadow-lg">
                  <h4 className="font-semibold text-purple-700">
                    {exp.jobTitle} - {exp.companyName}
                  </h4>
                  <p className="text-gray-600">
                    {exp.stillWork ? "Currently working" : "Previously worked"}
                  </p>
                </div>
              ))}
            </div>
            {editMode && (
              <div className="mt-4">
                <input
                  type="text"
                  value={EmpTitle}
                  onChange={(e) => setEmpTitle(e.target.value)}
                  className="border p-2 rounded w-full bg-white text-gray-800"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={EmpCompany}
                  onChange={(e) => setEmpCompany(e.target.value)}
                  className="border p-2 rounded w-full mt-2 bg-white text-gray-800"
                  placeholder="Company Name"
                />
                <label className="mt-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={EmpStillWork}
                    onChange={() => setEmpStillWork(!EmpStillWork)}
                    className="mr-2"
                  />{" "}
                  Still working here
                </label>
                <br />
                <button
                  onClick={addExperience}
                  className="mt-2 px-5 p-2 text-white rounded-lg hover:underline bg-blue-600"
                >
                  Add Experience
                </button>
              </div>
            )}
          </div>


          {/* Certification Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user?.certifications?.map((cert, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white shadow-lg">
                  <h4 className="font-semibold text-green-700">{cert.title}</h4>
                  <p className="text-gray-600">{cert.institution}</p>
                </div>
              ))}
            </div>
            {editMode && (
              <div className="mt-4">
                <input
                  type="text"
                  value={CertTitle}
                  onChange={(e) => setCertTitle(e.target.value)}
                  className="border p-2 rounded w-full bg-white text-gray-800"
                  placeholder="Certification Title"
                />
                <input
                  type="text"
                  value={CertInstitution}
                  onChange={(e) => setCertInstitution(e.target.value)}
                  className="border p-2 rounded w-full mt-2 bg-white text-gray-800"
                  placeholder="Institution Name"
                />
                <button
                  onClick={addCertification}
                  className="mt-2 px-5 p-2 text-white rounded-lg hover:underline bg-green-600"
                >
                  Add Certification
                </button>
              </div>
            )}
          </div>

          {/* Social Media Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Social Media Accounts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user?.socialMedia?.map((social, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white shadow-lg">
                  {/* <h4 className="font-semibold text-blue-700">{social.platform}</h4> */}
                  <p className="text-gray-600">
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {social.platform}
                    </a>
                  </p>
                </div>
              ))}
            </div>
            {editMode && (
              <div className="mt-4">
                <input
                  type="text"
                  value={SocialPlatform}
                  onChange={(e) => setSocialPlatform(e.target.value)}
                  className="border p-2 rounded w-full bg-white text-gray-800"
                  placeholder="Social Media Platform"
                />
                <input
                  type="text"
                  value={SocialLink}
                  onChange={(e) => setSocialLink(e.target.value)}
                  className="border p-2 rounded w-full mt-2 bg-white text-gray-800"
                  placeholder="Profile Link"
                />
                <button
                  onClick={addSocialMedia}
                  className="mt-2 px-5 p-2 text-white rounded-lg hover:underline bg-blue-600"
                >
                  Add Account
                </button>
              </div>
            )}
          </div>



        </div>
      </div>
    </div>
  );
};

export default Profile;
