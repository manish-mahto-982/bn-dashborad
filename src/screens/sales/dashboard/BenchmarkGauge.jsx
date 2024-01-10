import React from 'react';
// import GaugeChart from 'react-gauge-chart';

const BenchmarkGauge = () => {
  return (
    <div>
      <h2>Benchmark Performance</h2>
      <div className="gauge-chart-item">
        {/* <GaugeChart id="gauge-chart-benchmark" percent={0.6} /> */}
        <p>Excellent</p>
        <p>Lead - Consultation</p>
      </div>
      {/* Repeat for other benchmark categories */}
    </div>
  );
};

export default BenchmarkGauge;
