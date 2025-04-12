"use client";
import React, { useState } from "react";

const USGForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setResult(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Upload failed", error);
      setResult({ prediction: "Error", confidence: 0 });
    }
    setLoading(false);
  };

  return (
    <div className=" bg-transparent py-4 px-4 mt-26 flex justify-center">
      <div className="p-6 max-w-lg w-full bg-white rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          📄 Upload USG Report
        </h2>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById("fileInput").click()}
          className={`border-2 border-dashed rounded-xl transition-all duration-200 p-4 text-center cursor-pointer flex flex-col items-center justify-center h-32 ${
            isDragging
              ? "bg-pink-100 border-pink-500"
              : "bg-pink-50 border-gray-300"
          }`}
        >
          {file ? (
            <p className="text-green-600 font-medium">
              ✅ Selected: {file.name}
            </p>
          ) : (
            <p className="text-gray-500">Drag & drop or click to upload image</p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="fileInput"
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className={`mt-4 w-full py-2 rounded-full font-semibold text-white transition-all duration-200 ${
            loading || !file
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {loading ? "Analyzing..." : "Submit for Prediction"}
        </button>

        {result && (
          <div className="mt-4 bg-pink-100 border border-pink-300 rounded-xl px-4 py-3 text-center space-y-1">
            <p className="text-lg font-semibold text-gray-800">
              Prediction:{" "}
              <span
                className={`${
                  result.prediction === "infected"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {result.prediction}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Confidence: {(result.confidence * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default USGForm;
