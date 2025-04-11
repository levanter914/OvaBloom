"use client";
import { useState } from "react";

const featureOrder = [
   ' Age (yrs)', 'Weight (Kg)', 'Height(Cm) ', 'BMI', 'Blood Group',
  'Pulse rate(bpm) ', 'RR (breaths/min)', 'Hb(g/dl)', 'Cycle(R/I)', 'Cycle length(days)',
  'Marraige Status (Yrs)', 'Pregnant(Y/N)', 'No. of aborptions', '  I   beta-HCG(mIU/mL)',
  'II    beta-HCG(mIU/mL)', 'FSH(mIU/mL)', 'LH(mIU/mL)', 'Hip(inch)', 'Waist(inch)',
  'Waist:Hip Ratio', 'TSH (mIU/L)', 'AMH(ng/mL)', 'PRL(ng/mL)', 'Vit D3 (ng/mL)', 'PRG(ng/mL)',
  'RBS(mg/dl)', 'Weight gain(Y/N)', 'hair growth(Y/N)', 'Skin darkening (Y/N)', 'Hair loss(Y/N)',
  'Pimples(Y/N)', 'Fast food (Y/N)', 'Reg.Exercise(Y/N)', 'BP _Systolic (mmHg)',
  'BP _Diastolic (mmHg)', 'Follicle No. (L)', 'Follicle No. (R)',
  'Avg. F size (L) (mm)', 'Avg. F size (R) (mm)', 'Endometrium (mm)'
];

export default function ClinicalForm() {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setPrediction(data.prediction || "No result");
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction("Server error");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">PCOS Clinical Prediction</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featureOrder.map((feature, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">{feature}</label>
            <input
              type="text"
              name={feature}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              placeholder={`Enter ${feature}`}
            />
          </div>
        ))}

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Predict PCOS
          </button>
        </div>
      </form>

      {prediction && (
        <p className="mt-6 text-lg font-semibold text-center text-green-700">
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
}
