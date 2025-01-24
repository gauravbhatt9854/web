import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectData as data } from "./store";

const ProjectDetailPage = () => {
    const { projectId } = useParams(); // Get the projectId from the URL
    const [project, setProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [proposalData, setProposalData] = useState({
        proposalText: "",
        budget: "",
        duration: "",
    });
    const [messageText, setMessageText] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null); // Alert state for success or failure messages

    useEffect(() => {
        const projectDetails = data.find((item) => item._id === projectId);
        if (projectDetails) {
            setProject(projectDetails);
        } else {
            console.error("Project not found");
        }
    }, [projectId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProposalData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitProposal = async () => {
        setLoading(true);
        setAlert(null);

        const proposal = {
            projectId: project._id,
            userId: "12345", // Replace with actual user ID
            ...proposalData,
        };

        try {
            const response = await fetch("https://your-backend-api.com/proposals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(proposal),
            });

            if (response.ok) {
                setAlert({ type: "success", message: "Proposal submitted successfully!" });
                setShowModal(false); // Close the modal
            } else {
                const errorData = await response.json();
                setAlert({ type: "error", message: errorData.message || "Failed to submit the proposal." });
            }
        } catch (error) {
            console.error("Error submitting proposal:", error);
            setAlert({ type: "error", message: "An error occurred. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (messageText.trim() === "") return;
        setLoading(true);
        setAlert(null);

        const message = {
            project_id: project._id,
            sender_id: "1", // Hardcoded sender ID
            receiver_id: project.client_id, // Receiver ID from project
            messageText,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        try {
            const response = await fetch("https://your-backend-api.com/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });

            if (response.ok) {
                setAlert({ type: "success", message: "Message sent successfully!" });
                setShowMessageModal(false);
                setMessageText("");
            } else {
                const errorData = await response.json();
                setAlert({ type: "error", message: errorData.message || "Failed to send the message." });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setAlert({ type: "error", message: "An error occurred. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    if (!project) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-4">{project.description}</p>
                <p className="mt-2 text-gray-600">Budget: ${project.budget}</p>
                <p className="mt-2 text-gray-600">Skills Required: {project.skillsRequired.join(", ")}</p>
                <p className="mt-2 text-gray-600">Duration: {project.duration}</p>
                <p className="mt-2 text-gray-600">Status: {project.status}</p>
                {alert && (
                    <div
                        className={`mt-4 p-4 rounded-md ${
                            alert.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                        {alert.message}
                    </div>
                )}
                <div className="mt-4 flex space-x-4">
                    <button
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={() => setShowModal(true)}
                    >
                        Make a Proposal
                    </button>
                    <button
                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        onClick={() => setShowMessageModal(true)}
                    >
                        Send Message
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">Submit Your Proposal</h3>
                        <label className="block text-sm font-medium text-gray-700">Proposal Text</label>
                        <textarea
                            name="proposalText"
                            className="w-full mt-1 p-2 border rounded-md"
                            rows="3"
                            value={proposalData.proposalText}
                            onChange={handleInputChange}
                        ></textarea>
                        <label className="block text-sm font-medium text-gray-700 mt-4">Budget ($)</label>
                        <input
                            type="number"
                            name="budget"
                            className="w-full mt-1 p-2 border rounded-md"
                            value={proposalData.budget}
                            onChange={handleInputChange}
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">Duration (Days)</label>
                        <input
                            type="number"
                            name="duration"
                            className="w-full mt-1 p-2 border rounded-md"
                            value={proposalData.duration}
                            onChange={handleInputChange}
                        />
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className={`px-4 py-2 text-white rounded-md ${
                                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                                onClick={handleSubmitProposal}
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showMessageModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            className="w-full mt-1 p-2 border rounded-md"
                            rows="3"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                                onClick={() => setShowMessageModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className={`px-4 py-2 text-white rounded-md ${
                                    loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                                }`}
                                onClick={handleSendMessage}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailPage;
