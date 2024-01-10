import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HighPotential from './HighPotential';
import PrimeSegment from './PrimeSegment';
import MedicalCondition from './MedicalCondition';
import HStaken from './HStaken';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllLeadCapture from './AllLeadCapture';
import PitchedNotFUset from './PitchedNotFUset';
import FUmisses from './FUmisses';
import ConsultationMisses from './ConsultationMisses';
import RateShared from './RateShared';
import LinkShared from './LinkShared';
import LinksExpiring from './LinksExpiring';
import HotTrigger from './HotTrigger';
import WarmTrigger from './WarmTrigger';

export default function TableTab() {
  const [selectedLeadToCapture, setSelectedLeadToCapture] = useState('all lead');
  const [anchorElLeadToCapture, setAnchorElLeadToCapture] = useState(null);

  const [selectedMisses, setSelectedMisses] = useState(null);
  const [anchorElMisses, setAnchorElMisses] = useState(null);

  const [selectedSalesOpportunity, setSelectedSalesOpportunity] = useState(null);
  const [anchorElSalesOpportunity, setAnchorElSalesOpportunity] = useState(null);

  const [selectedNeedAttention, setSelectedNeedAttention] = useState(null);
  const [anchorElNeedAttention, setAnchorElNeedAttention] = useState(null);

  const handleLeadToCaptureClick = (event) => {
    setAnchorElLeadToCapture(event.currentTarget);
  };

  const handleMissesClick = (event) => {
    setAnchorElMisses(event.currentTarget);
  };

  const handleSalesOpportunityClick = (event) => {
    setAnchorElSalesOpportunity(event.currentTarget);
  };

  const handleNeedAttentionClick = (event) => {
    setAnchorElNeedAttention(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElLeadToCapture(null);
    setAnchorElMisses(null);
    setAnchorElSalesOpportunity(null);
    setAnchorElNeedAttention(null);
  };

  const handleLeadToCaptureChange = (newStage) => {
    setSelectedLeadToCapture(newStage);
    setAnchorElLeadToCapture(null);
  };

  const handleMissesChange = (newStage) => {
    setSelectedMisses(newStage);
    setAnchorElMisses(null);
  };

  const handleSalesOpportunityChange = (newStage) => {
    setSelectedSalesOpportunity(newStage);
    setAnchorElSalesOpportunity(null);
  };

  const handleNeedAttentionChange = (newStage) => {
    setSelectedNeedAttention(newStage);
    setAnchorElNeedAttention(null);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={3}>
        <Button
          onClick={handleLeadToCaptureClick}
          style={{
            color: 'white',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#7352c7',
            width: '100%', // Full width on smaller screens
            maxWidth: '290px', // Limit width on larger screens
            margin: '8px', 
            padding:'10px'// Adjust margin
          }}
        >
          Lead To Capture
          <ExpandMoreIcon /> 
        </Button>
        <Menu style={{left:'80px'}}
          anchorEl={anchorElLeadToCapture}
          open={Boolean(anchorElLeadToCapture)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleLeadToCaptureChange('potential')}>High Potential</MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange('segment')}>Prime Segment</MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange('medical')}>Medical Condition</MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange('hs')}>HS Taken</MenuItem>
        </Menu>
      </Grid>

      <Grid item xs={12} sm={3} md={3}>
        <Button
          onClick={handleMissesClick}
          style={{
            color: 'white',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#7352c7',
            marginLeft: '16px',
            width: '100%', // Full width on smaller screens
            maxWidth: '290px', // Limit width on larger screens
            margin: '8px', 
            padding:'10px'// Adjust margin
          }}
        >
          Misses/Do
          <ExpandMoreIcon /> 
        </Button>
        <Menu style={{left:'80px'}}
          anchorEl={anchorElMisses}
          open={Boolean(anchorElMisses)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMissesChange('fu misses')}>FU Misses</MenuItem>
          <MenuItem onClick={() => handleMissesChange('consultation misses')}>Consultation Misses</MenuItem>
          <MenuItem onClick={() => handleMissesChange('pitched not fu')}>Pitched But Not FU Set</MenuItem>
        </Menu>
      </Grid>

      <Grid item xs={12} sm={3} md={3}>
        <Button
          onClick={handleSalesOpportunityClick}
          style={{
            color: 'white',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#7352c7',
            marginLeft: '16px',
            width: '100%', // Full width on smaller screens
            maxWidth: '290px', // Limit width on larger screens
            margin: '8px',
            padding:'10px' // Adjust margin
          }}
        >
          Sales Opportunity
          <ExpandMoreIcon /> 
        </Button>
        <Menu style={{left:'80px'}}
          anchorEl={anchorElSalesOpportunity}
          open={Boolean(anchorElSalesOpportunity)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleSalesOpportunityChange('rate shared')}>Rate Shared</MenuItem>
          <MenuItem onClick={() => handleSalesOpportunityChange('link shared')}>Link Shared</MenuItem>
          <MenuItem onClick={() => handleSalesOpportunityChange('checkout visit')}>Checkout Visit</MenuItem>
        </Menu>
      </Grid>

      <Grid item xs={12} sm={3} md={3}>
        <Button
          onClick={handleNeedAttentionClick}
          style={{
            color: 'white',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#7352c7',
            marginLeft: '16px',
            width: '100%', // Full width on smaller screens
            maxWidth: '290px', // Limit width on larger screens
            margin: '8px',
            padding:'10px' // Adjust margin
          }}
        >
          Need Attention
          <ExpandMoreIcon /> 
        </Button>
        <Menu style={{left:'80px'}}
          anchorEl={anchorElNeedAttention}
          open={Boolean(anchorElNeedAttention)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleNeedAttentionChange('App Activity')}>App Activity</MenuItem>
          <MenuItem onClick={() => handleNeedAttentionChange('links expiring')}>Links Expiring</MenuItem>
          <MenuItem onClick={() => handleNeedAttentionChange('hot trigger')}>Hot Trigger</MenuItem>
          <MenuItem onClick={() => handleNeedAttentionChange('warm trigger')}>Warm Trigger</MenuItem>
        </Menu>
      </Grid>

      {/* Render content based on selected options */}
      {selectedLeadToCapture === 'all lead' && (
        
           <Grid item xs={12} md={12} ld={12}>
          <AllLeadCapture />
          </Grid>
       
      )}
      {selectedLeadToCapture === 'potential' && (
         <Grid item xs={12} md={12} ld={12}>
          <HighPotential />
        </Grid>
      )}
      {selectedLeadToCapture === 'segment' && (
         <Grid item xs={12} md={12} ld={12}>
          <PrimeSegment />
        </Grid>
      )}
      {selectedLeadToCapture === 'medical' && (
         <Grid item xs={12} md={12} ld={12}>
          <MedicalCondition />
        </Grid>
      )}
      {selectedLeadToCapture === 'hs' && (
         <Grid item xs={12} md={12} ld={12}>
          <HStaken />
        </Grid>
      )}

     
      {selectedMisses === 'fu misses' && (
         <Grid item xs={12} md={12} ld={12}>
          <FUmisses/>
        </Grid>
      )}

    {selectedMisses === 'pitched not fu' && (
         <Grid item xs={12} md={12} ld={12}>
          <PitchedNotFUset/>
        </Grid>
      )}

{selectedMisses === 'consultation misses' && (
         <Grid item xs={12} md={12} ld={12}>
          <ConsultationMisses/>
        </Grid>
      )}
      

      {selectedSalesOpportunity === 'rate shared' && (
         <Grid item xs={12} md={12} ld={12}>
          <RateShared/>
        </Grid>
      )}
      {selectedSalesOpportunity === 'link shared' && (
        <Grid item xs={12} md={12} ld={12}>
        <LinkShared/>
        </Grid>
      )}

      {selectedNeedAttention === 'links expiring' && (
        <Grid item xs={12} md={12} ld={12}>
        <LinksExpiring/>
        </Grid>
      )}
      {selectedNeedAttention === 'hot trigger' && (
         <Grid item xs={12} md={12} ld={12}>
          <HotTrigger/>
        </Grid>
      )}
      {selectedNeedAttention === 'warm trigger' && (
         <Grid item xs={12} md={12} ld={12}>
          <WarmTrigger/>
        </Grid>
      )}
    </Grid>
  );
}
