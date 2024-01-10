import React from 'react';
import './css/totalUnconverted.css'; // Import your CSS file for styling

const TotalUnconverted = () => {
  return (
    <div className="data-cards-container">
      <div className="data-card consultation-card">
        <h2>Consultation</h2>
        <div className="value-container">
          <div>
            <span className="left-text">Prime Segments:</span>
            <span className="right-text">500</span>
          </div>
          <div>
            <span className="left-text">High Potential:</span>
            <span className="right-text">9658</span>
          </div>
        </div>
      </div>

      <div className="data-card stage-card">
        <h2>Stage</h2>
        <div className="stage">
          <div>
            <span className="left-text">Stage1:</span>
            <span className="right-text">78</span>
          </div>
          <div>
            <span className="left-text">Stage2:</span>
            <span className="right-text">3116</span>
          </div>
          <div>
            <span className="left-text">Stage3:</span>
            <span className="right-text">124</span>
          </div>
          <div>
            <span className="left-text">Stage4:</span>
            <span className="right-text">124</span>
          </div>
        </div>
      </div>

      <div className="data-card phase-card">
        <h2>Phase</h2>
        <div className="phase">
          <div>
            <span className="left-text">Phase1:</span>
            <span className="right-text">78</span>
          </div>
          <div>
            <span className="left-text">Phase2:</span>
            <span className="right-text">3116</span>
          </div>
          <div>
            <span className="left-text">Phase3:</span>
            <span className="right-text">124</span>
          </div>
          <div>
            <span className="left-text">Phase4:</span>
            <span className="right-text">124</span>
          </div>
        </div>
      </div>

      <div className="data-card downgraded-card">
        <h2>Downgraded</h2>
        <div className="downgraded">
          <div>
            <span className="left-text">Hot to Warm:</span>
            <span className="right-text">78</span>
          </div>
          <div>
            <span className="left-text">Hot to Cold:</span>
            <span className="right-text">3116</span>
          </div>
          <div>
            <span className="left-text">Warm to Cold:</span>
            <span className="right-text">124</span>
          </div>
        </div>
      </div>

      <div className="data-card condition-card">
        <h2>Clinical Condition</h2>
        <div className="clinical-condition">
          <div>
            <span className="left-text">Diabetes:</span>
            <span className="right-text">25</span>
          </div>
          <div>
            <span className="left-text">Thyroid:</span>
            <span className="right-text">65</span>
          </div>
          {/* Add other conditions as needed */}
        </div>
      </div>
    </div>
  );
};

export default TotalUnconverted;
