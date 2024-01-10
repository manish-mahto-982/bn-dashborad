import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function HighLightCard() {
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Revenue
        </Typography>
        <Typography variant="h4" color="primary">
          $42,562
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Revenue Last Month
        </Typography>
        <Typography variant="h4" color="primary">
          $50,032
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HighLightCard