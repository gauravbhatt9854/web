import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { messages, usersData as users, ProjectData } from '../ProjectPage/store';

const ChatApp = () => {
    const myId = 1; // Your user ID

    // Filter messages where the user is either the sender or receiver
    const userMessages = messages.filter(
        (msg) => msg.sender_id === myId || msg.receiver_id === myId
    );

    // Group messages by project and friend
    const groupedMessages = userMessages.reduce((acc, msg) => {
        const friendId = msg.sender_id === myId ? msg.receiver_id : msg.sender_id;
        const projectKey = `${msg.project_id}_${friendId}`;

        if (!acc[projectKey]) {
            const friend = users.find((user) => user.id === String(friendId));
            const project = ProjectData.find((proj) => proj._id === msg.project_id);
            acc[projectKey] = {
                project_id: msg.project_id,
                friend_id: friendId,
                friend_name: friend ? `${friend.firstName} ${friend.lastName}` : 'Unknown',
                project_title: project ? project.title : 'Unknown Project',
                messages: [],
            };
        }

        acc[projectKey].messages.push(msg);
        return acc;
    }, {});

    const [selectedChat, setSelectedChat] = useState(null);

    // Handle sending a message
    const handleSendMessage = () => {
        if (!selectedChat?.newMessage?.trim()) return; // Don't send if input is empty or just spaces

        // Create a new message object
        const newMsg = {
            _id: messages.length + 1, // Ensure unique ID
            sender_id: myId,
            receiver_id: selectedChat.friend_id,
            project_id: selectedChat.project_id,
            messageText: selectedChat.newMessage,
            createdAt: new Date(),
        };

        // Add the new message to the messages list
        messages.push(newMsg);

        // Update the selected chat to reflect the new message
        setSelectedChat((prev) => ({
            ...prev,
            messages: [...prev.messages, newMsg],
            newMessage: '', // Clear the input field after sending
        }));
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial' }}>
            {/* Left Panel: Projects and Friends */}
            <div style={{ width: '25%', borderRight: '1px solid #ddd', padding: '10px', overflowY: 'auto' }}>
                <h3>Chats</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {Object.values(groupedMessages).map((chat, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '10px',
                                margin: '5px 0',
                                cursor: 'pointer',
                                backgroundColor: selectedChat?.friend_id === chat.friend_id && selectedChat?.project_id === chat.project_id
                                    ? '#f0f8ff'
                                    : 'white',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                            }}
                            onClick={() => setSelectedChat(chat)}
                        >
                            <strong>{chat.friend_name}</strong>
                            <p style={{ fontSize: '0.9em', color: '#666' }}>Project: {chat.project_title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Chat Box */}
            <div style={{ flex: 1, padding: '10px' }}>
                <h3>
                    {selectedChat
                        ? `Chat with ${selectedChat.friend_name} (Project: ${selectedChat.project_title})`
                        : 'Select a chat to view messages'}
                </h3>
                {selectedChat ? (
                    <>
                        <div style={{ height: '70vh', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}>
                            {selectedChat.messages.map((message, index) => (
                                <div
                                    key={index}
                                    style={{
                                        textAlign: message.sender_id === myId ? 'right' : 'left',
                                        margin: '5px 0',
                                    }}
                                >
                                    <p
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px',
                                            backgroundColor: '#f1f1f1',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        {message.messageText}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <input
                                type="text"
                                value={selectedChat.newMessage || ''}
                                onChange={(e) =>
                                    setSelectedChat((prev) => ({
                                        ...prev,
                                        newMessage: e.target.value,
                                    }))
                                }
                                placeholder="Type a message..."
                                style={{ width: '80%', padding: '10px' }}
                            />
                            <button
                                onClick={handleSendMessage}
                                style={{ padding: '10px', marginLeft: '5px' }}
                            >
                                Send
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Please select a chat to start messaging.</p>
                )}
            </div>
        </div>
    );
};

export default ChatApp;
