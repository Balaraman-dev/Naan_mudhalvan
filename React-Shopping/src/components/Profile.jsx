import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Frontend Developer | React & Tailwind Enthusiast",
    location: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700 text-center mt-2">{user.bio}</p>
          <p className="text-sm text-gray-500 mt-1">{user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

