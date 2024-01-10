import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const SetGoal = () => {
  const gradientColors = [
    'rgb(228, 74, 119)',
    'linear-gradient(rgb(35, 188, 186), rgb(69, 233, 148))',
    'linear-gradient(to right, #ff5e62, #ff9966)',
    'linear-gradient(rgb(132, 60, 246), rgb(56, 184, 242))',
  ];

  return (
    <div
      style={{
        marginBottom: '20px', // Adjust as needed
      }}
    >
      <Grid container spacing={3}>
        {gradientColors.map((color, index) => (
          <Grid key={index} item xs={12} sm={3}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                background: color,
                color: 'white',
                textAlign: 'left', // Align content to the left
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align items to the left
                border: '1px solid #ccc', // Add border
                borderRadius:'15px',
                transition: 'transform 0.3s, box-shadow 0.3s ease-in-out', // Add transition for transform and box-shadow
                '&:hover': {
                  transform: 'scale(1.05)', // Adjust the scale factor as needed
                  boxShadow: '0px 8px 20px -5px rgba(0,0,0,0.7)', // Adjust box-shadow on hover
                },
              }}
            >
              <Typography variant="h4" gutterBottom>
                {index === 0 ? 'Lead' : index === 1 ? 'Consultation' : index === 2 ? 'Sales Unit' : 'Sales Amount'}
              </Typography>
              <Box mt={2}>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  Set -   21 | 10 lakhs
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  <b>Avg./Monthly - 21 | 10 lakhs</b>
                </Typography>
                <Typography variant="subtitle1">
                  <b>Need to do Today - 21 | 10 lakhs</b>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SetGoal;
