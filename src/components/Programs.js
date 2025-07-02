import React from 'react';
import './Programs.css';

import oneOnOneImg from './1.jpg';
import kids713Img from './2.jpeg';
import kids47Img from './4.jpg';

const Programs = () => {
  return (
    <section id="programs" className="programs-section">
      <h2>Programs</h2>
      <div className="programs-grid">

        <div className="program-card">
          <div className="program-image">
            <img src={oneOnOneImg} alt="1:1 Class" />
          </div>
          <h3>1:1 Private Class</h3>
          <p>
            Personalized instruction tailored to each student’s goals, pace, and musical style.
            Offered both <strong>in-home and in-studio</strong>. Suitable for <strong>all ages</strong>, from
            <strong> beginner to advanced</strong> levels.
          </p>
          <div className="price-columns">
            <div className="price-option">
              <strong>30 min:</strong><br />
              $35/session<br /><br />
              <strong>$120/month</strong><br />
              <em>$20 saving</em>
            </div>

            <div className="vertical-divider"></div>

            <div className="price-option">
              <strong>1 hour:</strong><br />
              $70/session<br /><br />
              <strong>$240/month</strong><br />
              <em>$40 saving</em>
            </div>
          </div>

        </div>





        <div className="program-card">
          <div className="program-image">
            <img src={kids713Img} alt="Group Class Kids 7-13" />
          </div>
          <h3>Group Class – Kids (7–15)</h3>
          <p>
            Explore music fundamentals, rhythm, and playing techniques in a collaborative and supportive group setting.
          </p>
          <p className="price">
            <strong>$22/hour</strong><br />
            <strong>$70/month</strong> (once a week) — <em>$18 saving</em><br />
            <strong>$140/month</strong> (twice a week) — <em>$36 saving</em>
          </p>
        </div>

        <div className="program-card">
          <div className="program-image">
            <img src={kids47Img} alt="Group Class Kids 4-7" />
          </div>
          <h3>Group Class – Kids (4–7)</h3>
          <p>
            Introduction to music through games, rhythm, and hands-on experience with instruments.
            Learn notes, tempo, and fun basics!
          </p>
          <p className="price">
            <strong>$22/hour</strong><br />
            <strong>$70/month</strong> (once a week) — <em>$18 saving</em><br />
            <strong>$140/month</strong> (twice a week) — <em>$36 saving</em>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Programs;
