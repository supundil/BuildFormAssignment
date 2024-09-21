import React, { useState } from "react";
import { FaCloud, FaCog, FaTimes } from "react-icons/fa";
import { HiMiniTrash } from "react-icons/hi2";
import { IoCube } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";

const MainFormPage = () => {
  const [activeSection, setActiveSection] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showAddFieldPopup, setShowAddFieldPopup] = useState(false);
  const [addedFields, setAddedFields] = useState([]);
  const [activeNav, setActiveNav] = useState("Contents");
  const [showSettingsPage, setShowSettingsPage] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonText, setButtonText] = useState("Start");

  const openSettingsPage = () => setShowSettingsPage(true);
  const closeSettingsPage = () => setShowSettingsPage(false);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  // Handle removing the uploaded image
  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  // Toggle Add Field Popup
  const toggleAddFieldPopup = () => {
    setShowAddFieldPopup(!showAddFieldPopup);
  };
  //Remove Added Field Popuped
  const removeField = (fieldToRemove) => {
    setAddedFields((prevFields) =>
      prevFields.filter((field) => field !== fieldToRemove)
    );
  };

  // Handle adding fields to the Steps section
  const handleAddField = (fieldName) => {
    setAddedFields((prevFields) => [...prevFields, fieldName]);
    setShowAddFieldPopup(false); // Close the popup after adding
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-white text-gray-800 p-4 relative">
        {/* Conditionally display settings if showSettingsPage is true */}
        {showSettingsPage ? (
          <div className="absolute top-0 left-0 w-full h-full bg-white p-4 z-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold flex items-center">
                <FaCog className="mr-2" />
                {activeSection === "welcomescreen" && "Welcome Screen Settings"}
                {activeSection === "Email" && "Email Settings"}
                {activeSection === "Phone Number" && "Phone Number Settings"}
              </h1>
              <button onClick={closeSettingsPage}>
                <FaTimes className="text-gray-600 text-2xl border border-gray-600 rounded-md cursor-pointer p-2 inline-flex items-center justify-center w-10 h-10" />
              </button>
            </div>

            {/* Conditional Fields based on Active Section */}
            {activeSection === "welcomescreen" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-4 ">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                    placeholder="Enter Title"
                  />

                  <label className="block text-sm font-bold mt-4 mb-4 ">
                    Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                    placeholder="Enter Description"
                  />
                  <label className="block text-sm font-bold mt-4 mb-4  ">
                    Button Text
                  </label>
                  <input
                    type="text"
                    placeholder="Enter button text"
                    className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                    onChange={(e) => setButtonText(e.target.value)}
                  />
                  <label className="block text-sm font-bold mt-4 mb-4  ">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="p-2 rounded-md text-gray-800 w-full"
                  />
                </div>

                {uploadedImage && (
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-auto h-32 object-cover mb-2 rounded-lg"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="p-1 rounded-lg text-gray-800 border border-gray-400 hover:border-gray-800 focus:outline-none"
                    >
                      Remove Image
                    </button>
                  </div>
                )}
                <div className="flex space-x-4 justify-center ">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-xl  w-full">
                    Save
                  </button>
                  <button className="bg-white text-red-500 py-2 px-4 rounded-xl w-full">
                    Discard
                  </button>
                </div>
              </>
            )}

            {activeSection === "Email" && (
              <div className="mb-4">
                <label className="block text-sm font-bold mb-4">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                  placeholder="Enter Title"
                />
                <label className="block text-sm font-bold mt-4 mb-4">
                  Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                  placeholder="Enter Description"
                />
                <div className="flex space-x-4 justify-center mt-10 ">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-xl  w-full ">
                    Save
                  </button>
                  <button className="bg-white text-red-500 py-2 px-4 rounded-xl w-full ">
                    Discard
                  </button>
                </div>
              </div>
            )}

            {activeSection === "Phone Number" && (
              <div className="mb-4">
                <label className="block text-sm font-bold mb-4">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                  placeholder="Enter Title"
                />
                <label className="block text-sm font-bold mt-4 mb-4">
                  Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 rounded-md text-gray-800 border border-gray-400 focus:border-gray-800 focus:outline-none w-full"
                  placeholder="Enter Description"
                />
                <div className="flex space-x-4 justify-center mt-10 ">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-xl  w-full ">
                    Save
                  </button>
                  <button className="bg-white text-red-500 py-2 px-4 rounded-xl w-full ">
                    Discard
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Navigation Path */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-sm font-bold text-gray-600 flex items-center">
                <IoCube className="mr-1" />
                <span className="mr-1">Dashboard </span> &gt; Demo Forms
              </h1>
              <FaCog className="text-gray-600 text-xl cursor-pointer" />
            </div>

            {/* Navigation Bar */}
            <nav className="flex justify-between bg-gray-100 py-1 px-2 rounded-md mb-4 shadow-md">
              {["Contents", "Design", "Share", "Replies"].map((navItem) => (
                <button
                  key={navItem}
                  className={`text-sm p-2 rounded-xl px-4 ${
                    activeNav === navItem
                      ? "bg-white text-gray-600" // Active (clicked) button
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200" // Inactive buttons with hover effect
                  }`}
                  onClick={() => setActiveNav(navItem)}
                >
                  {navItem}
                </button>
              ))}
            </nav>

            {/* Sidebar Buttons */}
            <h2 className="text-lg font-semibold mb-2 mt-10 flex items-center">
              <TbMenu2 className="mr-1" />
              <span>Steps</span>
            </h2>

            <p className="text-sm mb-4 text-gray-600">
              The steps users will take to complete the form
            </p>

            <button
              onClick={() => {
                setActiveSection("welcomescreen");
                openSettingsPage();
              }}
              className={`mt-2 p-2 flex items-center ${
                activeSection === "welcomescreen"
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-gray-300"
              } rounded-md w-full`}
            >
              <div className="bg-gray-200 p-1 rounded-full flex items-center justify-center">
                <FaCircleDot />
              </div>
              <span className="flex-1 text-center text-black">
                Welcome screen
              </span>
            </button>

            {/* Dynamically added fields from Add Field Popup */}
            {addedFields.map((field, index) => (
              <div key={index} className="mt-2">
                <button
                  onClick={() => {
                    setActiveSection(field);
                    openSettingsPage();
                  }}
                  className={`flex items-center justify-between p-2 ${
                    activeSection === field
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "bg-gray-300 hover:bg-gray-400"
                  } text-black rounded-md w-full`}
                >
                  <span className="flex-1">{field}</span>

                  {/* Close Button (X) */}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      removeField(field);
                    }}
                    className="ml-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    <FaTimes className="w-3 h-3" />
                  </span>
                </button>
              </div>
            ))}

            {/* Add Field Button */}
            <button
              onClick={toggleAddFieldPopup}
              className="mt-7 px-2 border-[2px] border-gray-300 bg-white text-black rounded-lg hover:bg-gray-200  flex items-center"
            >
              <IoIosAdd className="mr-1" />
              <span>Add Field</span>
            </button>

            {/* Add Field Popup */}
            {showAddFieldPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="bg-white p-6 rounded-md shadow-md w-80">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Add Field</h3>
                    <button
                      onClick={toggleAddFieldPopup}
                      className="p-2 text-gray-800 rounded-md"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <ul>
                    <li
                      className="p-2 border-b cursor-pointer"
                      onClick={() => handleAddField("Email")}
                    >
                      Email
                    </li>
                    <li
                      className="p-2 border-b cursor-pointer"
                      onClick={() => handleAddField("Phone Number")}
                    >
                      Phone Number
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Buttons at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex space-x-4 justify-center p-4 bg-gray-200">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-xl w-full flex items-center justify-center space-x-2">
                <FaCloud />
                <span>Save & Publish</span>
              </button>
              <button className="bg-white text-red-500 py-2 px-4 rounded-xl w-full flex items-center justify-center space-x-2">
                <HiMiniTrash />
                <span>Delete</span>
              </button>
            </div>
          </>
        )}
      </aside>

      {/* Main Section */}
      <main className="w-3/4 bg-gray-800 text-white p-8 flex flex-row justify-center items-center border rounded-xl space-x-4 m-2">
        {activeSection === "welcomescreen" && (
          <div className="flex flex-row items-center space-x-24">
            {/* Display the updated title and description from the sidebar */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-semibold mb-2 w-96">
                {title || "Welcome to our form"}
              </h2>
              <p className="text-3xl w-96">
                {description || "This is a description of the form"}
              </p>

              <button className="bg-white text-black py-2 px-4 rounded-3xl flex items-center justify-center w-28 mt-5">
                {buttonText}
              </button>
            </div>

            {/* Display the uploaded image */}
            {uploadedImage && (
              <div className="flex-shrink-0">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-auto h-64 object-cover rounded-xl"
                />
              </div>
            )}
          </div>
        )}

        {activeSection === "Email" && (
          <div className="flex flex-col items-center space-x-24">
            {/* Display Title and Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-semibold mb-2">
                {title || "Email Section"}
              </h2>
              <p className="text-3xl">
                {description || "Enter a valid email address"}
              </p>

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4 p-2  text-white bg-gray-800 text-3xl w-full border-b border-b-gray-100 focus:outline-none focus:ring-0"
                placeholder="Enter Email"
              />
              {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
                email.length > 0 && (
                  <p className="text-red-500 text-sm">Invalid email format.</p>
                )}
            </div>
          </div>
        )}

        {activeSection === "Phone Number" && (
          <div className="flex flex-col items-center space-x-24">
            {/* Display Title and Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-semibold mb-2">
                {title || "Phone Number Section"}
              </h2>
              <p className="text-3xl">
                {description || "Enter a valid phone number (10 digits)"}
              </p>

              {/* Phone Number Input */}
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-4 p-2  text-white bg-gray-800 text-3xl w-full border-b border-b-gray-100 focus:outline-none focus:ring-0"
                placeholder="Enter Phone Number"
              />
              {phoneNumber.length !== 10 && phoneNumber.length > 0 && (
                <p className="text-red-500 text-sm">
                  Phone number must be exactly 10 digits.
                </p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainFormPage;
