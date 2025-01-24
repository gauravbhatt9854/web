import React, { useState, useEffect } from "react";
import { proposals } from "../ProjectPage/store"; // Import proposals array from another file

const FreelancerProposals = () => {
    const [freelancerProposals, setFreelancerProposals] = useState([]);
    const freelancerId = "1"

    useEffect(() => {
        // Filter proposals for the specific freelancer
        const filteredProposals = proposals.filter(
            (proposal) => proposal.freelancerId === freelancerId
        );
        setFreelancerProposals(filteredProposals);
    }, [freelancerId]);

    if (freelancerProposals.length === 0) {
        return <div className="text-center text-gray-500">No proposals found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Proposals
            </h1>
            <div className="grid gap-4">
                {freelancerProposals.map((proposal) => (
                    <div
                        key={proposal.proposalId}
                        className="p-6 bg-white rounded-lg shadow-md"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">
                            Project ID: {proposal.projectId}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Proposal: {proposal.proposalText}
                        </p>
                        <p className="text-gray-600 mt-2">Budget: ${proposal.budget}</p>
                        <p className="text-gray-600 mt-2">
                            Duration: {proposal.duration} days
                        </p>
                        <p className="mt-2">
                            Status:{" "}
                            <span
                                className={`font-semibold ${
                                    proposal.status === "accepted"
                                        ? "text-green-600"
                                        : proposal.status === "rejected"
                                        ? "text-red-600"
                                        : "text-gray-600"
                                }`}
                            >
                                {proposal.status.charAt(0).toUpperCase() +
                                    proposal.status.slice(1)}
                            </span>
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Submitted on: {new Date(proposal.submittedAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreelancerProposals;
