import React from 'react';
import { Bar } from 'react-chartjs-2';

const LeadFunnelChart = () => {
  const data = {
    labels: ['Lead to Consultation', 'Consultation to Sale', 'Lead to Sale'],
    datasets: [
      {
        label: 'Monthly',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [0, 0, 0], // Update with your actual data
      },
      {
        label: 'Quarterly',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: [0, 0, 0], // Update with your actual data
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true, max: 100 },
    },
  };

  return (
    <div>
      <h2>Lead Funnel (RATIOS)</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeadFunnelChart;
