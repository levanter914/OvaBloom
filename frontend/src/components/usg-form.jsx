// components/USGForm.jsx
"use client";
import React, { useState }from 'react';

const USGForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error('Upload failed', error);
      setResult({ prediction: 'Error', confidence: 0 });
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Upload USG Report</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
      />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        {loading ? 'Analyzing...' : 'Submit for Prediction'}
      </button>

      {result && (
        <div className="mt-4 text-center">
          <p className="font-semibold">
            Prediction:{" "}
            <span
              className={
                result.prediction === 'infected'
                  ? 'text-red-600'
                  : 'text-green-600'
              }
            >
              {result.prediction}
            </span>
          </p>
          <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default USGForm;
