"use client";

import { motion } from "framer-motion";
import "./about.css";

export default function AboutPage() {
  return (

    
    <div className="about-page">
      
      
      

      {/* Main Content */}
      <div className="about-container mx-auto px-8 py-16">
        <div className="about-content-wrapper">
          {/* Image Section */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/yo.png"
              alt="Ronny - Founder"
              className="about-profile-picture"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="about-title text-4xl font-bold">About Us</h1>
            <p className="about-description">
              At Coulsource Digital, we focus on creating meaningful solutions
              to solve marketing problems in the digital space. Our goal is to
              empower businesses with innovative ideas, communication, and
              actionable strategies.
            </p>
            <p className="about-story">
              My name is Ronny, and I’ve always dreamed of running a software
              business. My journey started as a kid fascinated with coding. I
              pursued a degree in Computer Science at Kent State University and
              gained valuable experience working for a home improvement company
              in the marketing department and door-to-door sales. Through these
              experiences, I developed a passion for helping businesses
              communicate and solve their challenges effectively.
            </p>
          </motion.div>
        </div>
      </div>

     
    </div>
  );
}
