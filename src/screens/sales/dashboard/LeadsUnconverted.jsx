import React from 'react';
import { Card, CardContent, Grow, Grid, Typography } from '@mui/material';

const LeadsUnconverted = () => {
  const data = {
    totalLeads: 10158,
    primeSegmentLeads: 500,
    highPotentialLeads: 9658,
    freshLeads: 500,
    olrLeads: 9658,
  };

  const totalLeadsSection = [
    { title: 'Total Leads', count: data.totalLeads },
  ];

  const otherSections = [
    {
      sections: [
        { title: 'OLC', count: 677 },
        { title: 'OLR', count: 566 },
      ],
    },
    {
      sections: [
        { title: 'High Potential', count: data.highPotentialLeads },
      ],
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <LeadCard sections={totalLeadsSection} gradientColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" />
      </Grid>
      {otherSections.map((item, index) => (
        <Grid key={index} item xs={12} sm={4}>
          <LeadCard sections={item.sections} gradientColor="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)" />
        </Grid>
      ))}
    </Grid>
  );
};

const LeadCard = ({ sections, gradientColor }) => (
  <Grow in>
    <Card sx={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', height: '100%', background: gradientColor }}>
      <CardContent>
        {sections.map((section, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold',  color: 'white' }}>
              {`${section.title} - ${section.count}`}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  </Grow>
);

export default LeadsUnconverted;
