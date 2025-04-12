"use client";

import { useEffect, useState } from "react";
import { buildPrompt } from "@/lib/llmpromptbuilder";
import removeMarkdown from "remove-markdown";
import Header from "@/components/header";

export default function RecommendPage() {
    const [recommendation, setRecommendation] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("clinicalData"));
        const prediction = localStorage.getItem("pcosPrediction");

        const prompt = buildPrompt(data, prediction);

        fetch("/api/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        })
            .then((res) => res.json())
            .then((res) => {
                const plainText = removeMarkdown(res.response);
                setRecommendation(plainText);
            });
    }, []);

    return (
        <div className="min-h-screen bg-[#FFF0F5]">
            <Header />
            <div className="max-w-3xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold text-pink-600 mb-4">
                    Your Personalized Wellness Plan
                </h1>
                {recommendation ? (
                    <pre className="whitespace-pre-wrap text-gray-800 bg-pink-50 p-4 rounded-xl shadow">
                        {recommendation}
                    </pre>
                ) : (
                    <p className="text-gray-500">Loading your plan...</p>
                )}
        </div></div>

    );
}
