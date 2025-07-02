import React from 'react';
import './Instruments.css';

import pianoImg from './piano-78492_1280.jpg';
import drumsImg from './drums-745077_1280.jpg';
import guitarImg from './guitar.jpg';
import theoryImg from './pexels-pixabay-210804.jpg';
import violinImg from './violin.jpeg';
import clarinetImg from './clarinet.jpg';

const Instruments = () => {
  return (
    <section id="instruments" className="instrument-section">
      {/* Floating notes background */}
      <div className="note-background">
  <span style={{ opacity: 0 }}>♪</span>
  <span style={{ opacity: 0 }}>♩</span>
  <span style={{ opacity: 0 }}>♫</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♭</span>
  <span style={{ opacity: 0 }}>#</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♫</span>
  <span style={{ opacity: 0 }}>♩</span>
  <span style={{ opacity: 0 }}>♭</span>

  <span style={{ opacity: 0 }}>♪</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♫</span>
  <span style={{ opacity: 0 }}>#</span>
  <span style={{ opacity: 0 }}>♩</span>
  <span style={{ opacity: 0 }}>♭</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♫</span>
  <span style={{ opacity: 0 }}>♪</span>
  <span style={{ opacity: 0 }}>♩</span>

  <span style={{ opacity: 0 }}>♭</span>
  <span style={{ opacity: 0 }}>#</span>
  <span style={{ opacity: 0 }}>♫</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♩</span>
  <span style={{ opacity: 0 }}>♭</span>
  <span style={{ opacity: 0 }}>#</span>
  <span style={{ opacity: 0 }}>♪</span>
  <span style={{ opacity: 0 }}>♬</span>
  <span style={{ opacity: 0 }}>♫</span>
</div>


      <h2>Instruments</h2>
      <div className="instrument-grid">
        <div className="instrument-card">
          <div className="instrument-image">
            <img src={pianoImg} alt="Piano" />
          </div>
          <h3>Piano</h3>
          <p>Classical and contemporary piano lessons for all levels.</p>
        </div>

        <div className="instrument-card">
          <div className="instrument-image">
            <img src={drumsImg} alt="Drums" />
          </div>
          <h3>Drums</h3>
          <p>Rhythm training and drumming technique for beginners to advanced.</p>
        </div>

        <div className="instrument-card">
          <div className="instrument-image">
            <img src={guitarImg} alt="Guitar" />
          </div>
          <h3>Guitar</h3>
          <p>Learn chords, melodies, and performance skills in various styles.</p>
        </div>

        <div className="instrument-card">
          <div className="instrument-image">
            <img src={violinImg} alt="Violin" />
          </div>
          <h3>Violin</h3>
          <p>Learn violin posture, bowing, and musicality from expert instructors.</p>
        </div>

        <div className="instrument-card">
          <div className="instrument-image">
            <img src={clarinetImg} alt="Clarinet" />
          </div>
          <h3>Clarinet</h3>
          <p>Clarinet instruction covering fundamentals, tone, and advanced techniques.</p>
        </div>

        <div className="instrument-card">
          <div className="instrument-image">
            <img src={theoryImg} alt="Theory" />
          </div>
          <h3>Theory</h3>
          <p>Master music reading, harmony, and ear training through theory classes.</p>
        </div>
      </div>
    </section>
  );
};

export default Instruments;
