import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
        List of Users
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listOfUser.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-lg p-4 rounded-lg border border-pink-300 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-400 text-sm">{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
