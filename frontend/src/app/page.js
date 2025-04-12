'use client';
import React from 'react';
import LHeader from "@/components/landing-header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5EBE1] text-[#5E3023]">
      <LHeader />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-100px)] px-6 md:px-8 py-12 gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-12 text-center md:text-left flex flex-col justify-center">
          <div className="text-7xl md:text-7xl font-serif font-bold">Welcome to Ovabloom</div>
          <p className="text-xl md:text-xl">
            Empowering women’s health with <strong>AI-driven PCOS detection</strong>, <strong>supportive care tools</strong>, and <strong>personalized insights</strong>.
            <strong>Ovabloom</strong> helps you <strong>track</strong>, <strong>understand</strong>, and <strong>manage</strong> your <strong>hormonal wellness</strong> with clarity and compassion.
          </p>
          <button className="w-fit mx-auto md:mx-0 h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full">
            Dashboard
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            interval={4000}
          >
            <div>
              <img src="/images/1.png" alt="Slide 1" className="rounded-2xl" />
            </div>
            <div>
              <img src="/images/2.png" alt="Slide 2" className="rounded-2xl" />
            </div>
            <div>
              <img src="/images/3.png" alt="Slide 3" className="rounded-2xl" />
            </div>
            <div>
              <img src="/images/4.png" alt="Slide 4" className="rounded-2xl" />
            </div>
          </Carousel>
        </div>
      </div>
      
      <div class="marquee bg-white">
          <div class="marquee-content">
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          <span>💖</span>
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>💅</span>
          <span>🩷</span>
          </div>
      </div>
                  
      {/* Ovabloom Mission Section */}
      <div className="bg-[#F3D9CA] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">🌸 Ovabloom's Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            PCOS impacts millions of women globally, yet diagnosis often remains slow, fragmented, and emotionally taxing.
            At <span className="font-semibold">Ovabloom</span>, we’re redefining how women access clarity and care — with AI that listens, learns, and supports.
          </p>

          {/* Cards for Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
            {/* Card 1 */}
            <div className="card bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 h-full">
              <a href="https://example.com" className="block h-full">
                <div className="card-content p-4 h-full">
                  <div className="text-small">Early Detection</div>
                  <p className="font-bold text-xl mb-2">LLM-Powered Symptom Analysis</p>
                  <p>
                    Our intelligent assistant evaluates early signs through natural, conversational prompts — offering test recommendations and guidance instantly.
                  </p>
                  <p className="font-semibold text-blue-600 mt-2">Get Started &rarr;</p>
                </div>
              </a>
            </div>

            {/* Card 2 - Clinical Analysis */}
            <div className="card bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 h-full">
              <a href="https://example.com" className="block h-full">
                <div className="card-content p-4 h-full">
                  <div className="text-small">Clinical Validation</div>
                  <p className="font-bold text-xl mb-2">Advanced Clinical Analysis</p>
                  <p>
                    Our AI models utilize advanced algorithms to analyze patient data and provide accurate assessments of PCOS indicators for timely clinical decisions.
                  </p>
                  <p className="font-semibold text-blue-600 mt-2">Get Started &rarr;</p>
                </div>
              </a>
            </div>

            {/* Card 3 - Ultrasound Interpretation */}
            <div className="card bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 h-full">
              <a href="https://example.com" className="block h-full">
                <div className="card-content p-4 h-full">
                  <div className="text-small">USG Interpretation</div>
                  <p className="font-bold text-xl mb-2">Multimodal ML Fusion</p>
                  <p>
                    By integrating ultrasound imaging and clinical data, Ovabloom provides a comprehensive analysis that enhances diagnostic accuracy and personalized care.
                  </p>
                  <p className="font-semibold text-blue-600 mt-2">Get Started &rarr;</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
