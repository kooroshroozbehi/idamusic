import React from 'react';
import './Home.css';

const Home = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Piano Lessons</h1>
        <p>
          Learn to play the piano with confidence and joy through structured lessons tailored to your goals and experience level. 
          We offer in-home and in-studio classes for students of all ages, from beginners to advanced players. 
          Private and group classes in <strong>Richmond Hill</strong> and <strong>Newmarket</strong>.
        </p>

        <button className="home-button" onClick={handleScrollToContact}>
          Book a Free Trial Lesson
        </button>
      </div>
    </section>
  );
};

export default Home;
