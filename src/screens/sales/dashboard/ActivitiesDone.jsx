import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import {
  AssignmentTurnedIn,
  Timelapse,
  Message,
  AssignmentInd,
  Whatshot,
  EmojiObjects,
  WbSunny,
  AcUnit,
  LocalCafe,
  Brightness3,
  NaturePeople,
  InvertColors,
  DirectionsRun,
  FilterVintage,
  Deck,
  HowToReg,
} from '@mui/icons-material';

const data = {
  'Lead To Capture': { t: 12, m: 220, items: { Done: { t: 12, m: 220 } } },
  Actions: { t: 0, m: 0, items: { 'Follow Up': { t: 0, m: 0 }, Consultation: { t: 0, m: 0 }, 'Action Assigned': { t: 0, m: 0 } } },
  Status: { t: 0, m: 0, items: { Hot: { t: 0, m: 0 }, 'To Engage': { t: 0, m: 0 }, Warm: { t: 0, m: 0 }, Cold: { t: 0, m: 0 } } },
  Stage: { t: 0, m: 0, items: { Stage1: { t: 0, m: 0 }, Stage2: { t: 0, m: 0 }, Stage3: { t: 0, m: 0 }, 'Stage 4': { t: 0, m: 0 } } },
  Phase: {
    t: 0,
    m: 0,
    items: { Phase1: { t: 0, m: 0 }, Phase2: { t: 0, m: 0 }, Phase3: { t: 0, m: 0 }, Phase4: { t: 0, m: 0 }, 'No Phase': { t: 0, m: 0 } },
  }
  
};

const categoryIcons = {
  'Lead To Capture': <AssignmentTurnedIn />,
  Actions: <Timelapse />,
  Status: <Message />,
  Stage: <AssignmentInd />,
  Phase: <Whatshot />,
  Hot: <EmojiObjects />,
  'To Engage': <WbSunny />,
  Warm: <AcUnit />,
  Cold: <LocalCafe />,
  Stage1: <Brightness3 />,
  Stage2: <NaturePeople />,
  Stage3: <InvertColors />,
  'Stage 4': <DirectionsRun />,
  Phase1: <FilterVintage />,
  Phase2: <Deck />,
  Phase3: <HowToReg />,
  Phase4: <Whatshot />,
  'No Phase': <Brightness3 />,
};

const categoryColors = ['#2196F3', '#4CAF50', '#FF9800', '#FF5722', '#9C27B0']; // Array of colors for categories

const ActivitiesDone = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
      {Object.entries(data).map(([category, values], index) => (
        <Paper key={category} elevation={3} style={{ padding: '20px', textAlign: 'center', flex: 1, margin: '10px' }}>
          <IconButton style={{ backgroundColor: categoryColors[index], color: 'white', marginBottom: '10px' }}>
            {categoryIcons[category]}
          </IconButton>
          <Typography variant="h6" style={{ marginBottom: '6px' }}>
            {category}
          </Typography>
          
          {values.items && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>(t)</TableCell>
                  <TableCell>(m)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(values.items).map(([subcategory, subValues]) => (
                  <TableRow key={subcategory}>
                    <TableCell>{subcategory}</TableCell>
                    <TableCell style={{ fontSize: '14px', color: 'blue' }}>{subValues.t}</TableCell>
                    <TableCell style={{ fontSize: '14px', color: 'orange' }}>{subValues.m}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default ActivitiesDone;
