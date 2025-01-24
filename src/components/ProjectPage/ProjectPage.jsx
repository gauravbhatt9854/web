import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ProjectData as data } from "./store";

const ProjectPage = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]); // For filter dropdown
  const [selectedSkill, setSelectedSkill] = useState("");
  const [budgetRange, setBudgetRange] = useState([0, 5000]);


  // Set initial projects and skills
  useEffect(() => {
    setSkills([...new Set(data.flatMap(project => project.skillsRequired))]); // Extract unique skills
    setProjects(data); // Set initial data
  }, []);

  // Filter projects based on selected skill and budget range
  const fetchProjects = () => {
    const filteredProjects = data.filter((project) => {
      const isSkillMatch = selectedSkill ? project.skillsRequired.includes(selectedSkill) : true;
      const isBudgetInRange = project.budget >= budgetRange[0] && project.budget <= budgetRange[1];
      
      return isSkillMatch && isBudgetInRange;
    });

    setProjects(filteredProjects);
  };

  // Filter change handlers
  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const handleBudgetChange = (e) => {
    const newBudgetRange = [e.target.value[0], budgetRange[1]];
    setBudgetRange(newBudgetRange);
  };

  const handleTakeProject = (projectId) => {
    navigate(`/dashboard/${projectId}`); // Navigate to project detail page
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filter Section */}
      <div className="flex justify-between items-center my-6">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <select
            value={selectedSkill}
            onChange={handleSkillChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Skill</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={budgetRange[0]}
            onChange={(e) => setBudgetRange([+e.target.value, budgetRange[1]])}
            className="w-full"
          />
          <span>{`$${budgetRange[0]} - $${budgetRange[1]}`}</span>
        </div>

        <div>
          <button
            onClick={fetchProjects}
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Project List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="font-semibold text-xl text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-blue-600 font-bold">Budget: ${project.budget}</span>
              <button
                onClick={() => handleTakeProject(project._id)}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-lg"
              >
                Take this Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
