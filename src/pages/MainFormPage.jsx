import React, { useState } from "react";
import { FaCog, FaTimes } from "react-icons/fa"; // Import settings icon

const MainFormPage = () => {
  const [activeSection, setActiveSection] = useState(""); // Controls which section of settings is visible
  const [title, setTitle] = useState(""); // State for title input
  const [description, setDescription] = useState(""); // State for description input
  const [uploadedImage, setUploadedImage] = useState(null); // State for uploaded image
  const [showAddFieldPopup, setShowAddFieldPopup] = useState(false); // Controls Add Field Popup visibility
  const [addedFields, setAddedFields] = useState([]); // State to store dynamically added fields
  const [activeNav, setActiveNav] = useState("Contents"); // Controls active tab in the navbar
  const [fieldSettings, setFieldSettings] = useState({}); // Holds settings for each added field
  const [showSettingsPage, setShowSettingsPage] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  // Handle adding fields to the Steps section
  const handleAddField = (fieldName) => {
    setAddedFields((prevFields) => [...prevFields, fieldName]);
    setShowAddFieldPopup(false); // Close the popup after adding
  };

  // Handle changing settings for added fields
  const handleFieldChange = (field, value) => {
    setFieldSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-gray-200 text-gray-800 p-4 relative">
        {/* Conditionally display settings if showSettingsPage is true */}
        {showSettingsPage ? (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 p-4 z-10">
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
                  <label className="block text-sm mb-1 ">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 rounded-md text-gray-800 w-full"
                    placeholder="Enter Title"
                  />
                  <label className="block text-sm mb-1 ">Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 rounded-md text-gray-800 w-full"
                    placeholder="Enter Description"
                  />
                  <label className="block text-sm mb-1  ">Upload Image</label>
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
                      className="w-32 h-32 object-cover mb-2"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="p-2 bg-red-500 text-white rounded-md"
                    >
                      Remove Image
                    </button>
                  </div>
                )}
              </>
            )}

            {activeSection === "Email" && (
              <div className="mb-4">
                <label className="block text-sm mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 rounded-md text-gray-800 w-full"
                  placeholder="Enter Title"
                />
                <label className="block text-sm mb-1">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 rounded-md text-gray-800 w-full"
                  placeholder="Enter Description"
                />
              </div>
            )}

            {activeSection === "Phone Number" && (
              <div className="mb-4">
                <label className="block text-sm mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 rounded-md text-gray-800 w-full"
                  placeholder="Enter Title"
                />
                <label className="block text-sm mb-1">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 rounded-md text-gray-800 w-full"
                  placeholder="Enter Description"
                />
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Navigation Path */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-sm font-bold text-gray-600">
                Dashboard &gt; Demo Forms
              </h1>
              <FaCog className="text-gray-600 text-xl cursor-pointer" />
            </div>

            {/* Navigation Bar */}
            <nav className="flex justify-between bg-gray-300 py-1 px-2 rounded-md mb-4 shadow-md ">
              {["Contents", "Design", "Share", "Replies"].map((navItem) => (
                <button
                  key={navItem}
                  className={`text-sm p-2 ${
                    activeNav === navItem
                      ? "bg-white rounded-xl px-4 text-gray-600"
                      : ""
                  }`}
                  onClick={() => setActiveNav(navItem)}
                >
                  {navItem}
                </button>
              ))}
            </nav>

            {/* Sidebar Buttons */}
            <h2 className="text-lg font-semibold mb-2">Steps</h2>
            <p className="text-sm mb-4 text-gray-600">
              Configure each step below. Add fields to create forms.
            </p>

            <button
              onClick={() => {
                setActiveSection("welcomescreen");
                openSettingsPage();
              }}
              className={`mt-2 p-2 ${
                activeSection === "welcomescreen"
                  ? "bg-white hover:bg-gray-100"
                  : "bg-white"
              } text-black rounded-md w-full`}
            >
              Welcome screen
            </button>

            {/* Dynamically added fields from Add Field Popup */}
            {addedFields.map((field, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSection(field);
                  openSettingsPage();
                }}
                className={`mt-2 p-2 ${
                  activeSection === field
                    ? "bg-white hover:bg-gray-100"
                    : "bg-white"
                } text-black rounded-md w-full`}
              >
                {field}
              </button>
            ))}

            {/* Add Field Button */}
            <button
              onClick={toggleAddFieldPopup}
              className="mt-7 p-2 border-[4px] border-black rounded-xl hover:border-gray-600 text-black hover:text-gray-600 font-bold"
            >
              Add Field
            </button>

            {/* Add Field Popup */}
            {showAddFieldPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="bg-white p-6 rounded-md shadow-md w-80">
                  <h3 className="text-lg font-semibold mb-4">Add Field</h3>
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
                  <button
                    onClick={toggleAddFieldPopup}
                    className="mt-4 p-2 bg-red-500 text-white rounded-md w-full"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </aside>

      {/* Main Section */}
      <main className="w-3/4 text-gray-800 bg-white p-8 flex flex-row justify-center items-center border rounded-xl space-x-4">
        {activeSection === "welcomescreen" && (
          <div className="flex flex-row items-center space-x-24">
            {/* Display the updated title and description from the sidebar */}
            <div className="flex flex-col justify-center w-96">
              <h2 className="text-5xl font-semibold mb-2 ">
                {title || "Default Title"}
              </h2>
              <p className="text-3xl">{description || "Default Description"}</p>
            </div>

            {/* Display the uploaded image */}
            {uploadedImage && (
              <div className="flex-shrink-0">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-64 h-64 object-cover rounded-xl"
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
                className="mt-4 p-2  text-gray-800 text-3xl w-full border-b border-b-black focus:outline-none focus:ring-0"
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
                className="mt-4 p-2  text-gray-800 text-3xl w-full border-b border-b-black focus:outline-none focus:ring-0"
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
