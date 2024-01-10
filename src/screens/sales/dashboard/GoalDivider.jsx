import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#7352c7' : '#7352c7',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GoalDivider() {
  return (
    <Box sx={{ width: '100%',height:'10%' }}>
      <Stack spacing={4}>
        <Item style={{padding:'5px' ,fontSize:'21px',color:'white'}}>Activities Done</Item>
      </Stack>
    </Box>
  );
}