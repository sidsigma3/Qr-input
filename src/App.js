import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Image:", image);
    console.log("Text:", text);

    alert("Inputs captured! Check console.");
  };

  return (
    <div className="container">
      <h2>QR Code Input</h2>

      <form className="card" onSubmit={handleSubmit}>
        {/* Image Upload */}
        <label className="label">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input"
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="preview"
          />
        )}

        {/* Text Input */}
        <label className="label">Enter Text</label>
        <textarea
          rows="4"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea"
        />

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
