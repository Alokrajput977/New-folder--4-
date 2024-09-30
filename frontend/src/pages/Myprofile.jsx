import React, { useState } from "react";
import { assets } from "../../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userdata, setUserdata] = useState({
    name: "John Doe",
    image: assets.profile_pic, // Update with your actual image asset
    email: "johndoe@example.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    gender: "male",
    dob: "2000-05-22",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <img src={userdata.image} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />

      <div className="my-4">
        {isEdit ? (
          <input
            type="text"
            value={userdata.name}
            onChange={(e) =>
              setUserdata((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
          />
        ) : (
          <h2 className="text-xl font-bold text-center">{userdata.name}</h2>
        )}
      </div>

      <hr className="my-4" />
      <div>
        <p className="font-semibold">CONTACT INFORMATION</p>
        <div>
          <label className="block mt-2">Email:</label>
          {isEdit ? (
            <input
              type="email"
              value={userdata.email}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userdata.email}</p>
          )}

          <label className="block mt-2">Phone:</label>
          {isEdit ? (
            <input
              type="text"
              value={userdata.phone}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userdata.phone}</p>
          )}

          <label className="block mt-2">Address:</label>
          {isEdit ? (
            <input
              type="text"
              value={userdata.address}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, address: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userdata.address}</p>
          )}

          <label className="block mt-2">Gender:</label>
          {isEdit ? (
            <select
              value={userdata.gender}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, gender: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p>{userdata.gender}</p>
          )}

          <label className="block mt-2">Date of Birth:</label>
          {isEdit ? (
            <input
              type="date"
              value={userdata.dob}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, dob: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userdata.dob}</p>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsEdit(!isEdit)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default MyProfile;
