import React from 'react';
import { CameraIcon, SearchIcon, DotsVerticalIcon, ChatIcon, PhoneIcon, StatusIcon, NewChatIcon } from './Icons'; // Adjust the path if necessary

function LandingPage({ onChatSelect }) {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-green-900 shadow-md">
        <div className="text-lg text-white font-bold">Trustlinecomm</div>
        <div className="flex items-center space-x-4">
          <CameraIcon />
          <SearchIcon />
          <DotsVerticalIcon />
        </div>
      </div>

      {/* Category Boxes */}
      <div className="flex justify-around p-4 bg-white shadow-md">
        <div className="rounded-full bg-gray-200 p-2 px-4">All</div>
        <div className="rounded-full bg-gray-200 p-2 px-4">Unread</div>
        <div className="rounded-full bg-gray-200 p-2 px-4">Favorite</div>
        <div className="rounded-full bg-gray-200 p-2 px-4">Groups</div>
      </div>

      {/* Chat List */}
      <div className="flex-grow overflow-y-scroll p-4 bg-white shadow-md">
        {Array(9).fill(0).map((_, index) => (
          <div
            key={index}
            className="flex items-center mb-4 cursor-pointer"
            onClick={() => onChatSelect(`User ${index + 1}`)} // Passing the selected user to parent component
          >
            <div className="rounded-full bg-gray-300 h-12 w-12 mr-4"></div> {/* Placeholder for DP */}
            <div>
              <div className="font-bold">User {index + 1}</div>
              <div className="text-sm text-gray-600">Last message from User {index + 1}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bar */}
      <div className="flex justify-around p-4 bg-white shadow-md">
        <div className="relative">
          <ChatIcon />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">5</span>
          <div className="text-xs mt-1">Chats</div>
        </div>
        <div>
          <PhoneIcon />
          <div className="text-xs mt-1">Calls</div>
        </div>
        <div>
          <StatusIcon />
          <div className="text-xs mt-1">Updates</div>
        </div>
        <div>
          <NewChatIcon />
          <div className="text-xs mt-1">New Chat</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
