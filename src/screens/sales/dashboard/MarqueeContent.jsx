// MarqueeContent.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import './css/marquee.css';

const MarqueeContent = () => {
  return (
    <Paper
      elevation={0} // Set elevation to 0 to remove the card effect
    
      className="marquee-container"
    >
      <Typography variant="body1" className="marquee-item">
        Lead for today 30
      </Typography>
      <Typography variant="body1" className="marquee-item">
        Consultation for today 60
      </Typography>
      <Typography variant="body1" className="marquee-item">
        Sales for Today 4 | Rs. 56,000
      </Typography>
    </Paper>
  );
};

export default MarqueeContent;
