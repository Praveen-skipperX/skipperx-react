import React from "react";
import "./blog.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const topics = [
    "Robot Engineering",
    "AR/VR",
    "Drone Engineering",
    "Startup stack",
    "Tech Core",
    "Creative Hub",
  ];
  const blogs = [
    {
      id: 1,
      date: "24 August 2025",
      tag: "Tech",
      title: "Why AI is trending and what will be the future.",
    },
    {
      id: 2,
      date: "24 August 2025",
      tag: "Tech",
      title: "Why AI is trending and what will be the future.",
    },
    {
      id: 3,
      date: "24 August 2025",
      tag: "Tech",
      title: "Why AI is trending and what will be the future.",
    },
    {
      id: 4,
      date: "24 August 2025",
      tag: "Tech",
      title: "Why AI is trending and what will be the future.",
    },
  ];

  return (
    <>
      <Navbar />
        <div className="blog-page">
        
        <section className="blog-hero">
            <h1 className="hero-title">
            <span className="highlight">Insights, stories,</span> and{" "}
            <span className="highlight">tools </span> to fuel your learning journey
            </h1>
            <p className="blog-hero-subtitle">Only on the SkipperX Blog</p>
        </section>

        
        <section className="trending-section">
            <p className="trending-title">EXPLORE TRENDING TOPICS</p>
            <div className="trending-list">
            {topics.map((topic, index) => (
                <button
                key={index}
                className={`topic-btn ${index === 0 ? "active" : ""}`}
                >
                {topic}
                </button>
            ))}
            </div>
        </section>




        <section className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-card-top">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-brand">SKIPPER<span>X</span></span>
            </div>

            <div className="blog-tag">{blog.tag}</div>
            <h3 className="blog-title">{blog.title}</h3>

            <button className="blog-arrow">
              ➜
            </button>
          </div>
        ))}
      </section>
    
        </div>
      <Footer />
    </>
  );
};

export default Blog;
