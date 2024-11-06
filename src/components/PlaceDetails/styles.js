import React from 'react';
import { Chip, Box, Typography } from '@mui/material';

const MyComponent = () => {
  return (
    <div>
      {/* Chip with custom margin */}
      <Box sx={{ margin: '5px 5px 5px 0' }}>
        <Chip label="Example Chip" />
      </Box>

      {/* Subtitle with flex styling */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
        <Typography variant="subtitle1">Subtitle</Typography>
      </Box>

      {/* Spacing between elements */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body1">Spacing Content</Typography>
      </Box>
    </div>
  );
};

export default MyComponent;
