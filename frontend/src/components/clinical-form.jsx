"use client";

import React, { useState } from "react";

const featureOrder = [
  'Age (yrs)', 'Weight (Kg)', 'Height(Cm)', 'BMI', 'Blood Group',
  'Pulse rate(bpm)', 'RR (breaths/min)', 'Hb(g/dl)', 'Cycle(R/I)', 'Cycle length(days)',
  'Marraige Status (Yrs)', 'Pregnant(Y/N)', 'No. of aborptions', 'I beta-HCG(mIU/mL)',
  'II beta-HCG(mIU/mL)', 'FSH(mIU/mL)', 'LH(mIU/mL)', 'Hip(inch)', 'Waist(inch)',
  'Waist:Hip Ratio', 'TSH (mIU/L)', 'AMH(ng/mL)', 'PRL(ng/mL)', 'Vit D3 (ng/mL)', 'PRG(ng/mL)',
  'RBS(mg/dl)', 'Weight gain(Y/N)', 'hair growth(Y/N)', 'Skin darkening (Y/N)', 'Hair loss(Y/N)',
  'Pimples(Y/N)', 'Fast food (Y/N)', 'Reg.Exercise(Y/N)', 'BP _Systolic (mmHg)',
  'BP _Diastolic (mmHg)', 'Follicle No. (L)', 'Follicle No. (R)',
  'Avg. F size (L) (mm)', 'Avg. F size (R) (mm)', 'Endometrium (mm)'
];

const ClinicalForm = () => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setPrediction(data.prediction || "No result");
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-4 text-[#5E3023]">
      <div className="p-6 max-w-5xl mx-auto bg-white shadow-xl rounded-xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-pink-400">
          PCOS Clinical Prediction Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {featureOrder.map((feature, idx) => (
            <div key={idx} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                {feature}
              </label>
              <input
                type="text"
                name={feature}
                onChange={handleChange}
                className="border border-black w-full p-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
                placeholder={`Enter ${feature}`}
              />
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
            >
              Predict PCOS
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-purple-700">
              Prediction: {prediction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicalForm;
