import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Frontend Developer | React & Tailwind Enthusiast",
    location: "San Francisco, CA",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JohnDoe",
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-white border border-purple-300 rounded-3xl shadow-2xl p-6 max-w-sm w-full transition-all duration-300 hover:scale-105">
        <div className="flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-pink-500 shadow-md animate-bounce"
          />
          <h2 className="mt-4 text-3xl font-extrabold text-purple-700 drop-shadow-sm">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="mt-3 px-3 py-2 bg-purple-100 rounded-xl text-purple-700 font-medium">
            {user.bio}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            📍 {user.location}
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
