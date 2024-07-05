import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import CartWidget from "../cartWidget/CartWidget";

export const Counter = ({ restar, contador, sumar }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={2} mt={2}>
      <Button 
        variant="contained" 
        onClick={restar}
        sx={{ backgroundColor: '#622f0b', '&:hover': { backgroundColor: '#6e4d35' } }}
      >
        -
      </Button>
      <Typography variant="h5" component="span">
        {contador}
      </Typography>
      <Button 
        variant="contained" 
        onClick={sumar}
        sx={{ backgroundColor: '#622f0b', '&:hover': { backgroundColor: '#6e4d35' } }}
      >
        +
      </Button>
      <Button 
        variant="contained" 
        color="secondary"
        sx={{ backgroundColor: '#622f0b', '&:hover': { backgroundColor: '#6e4d35' } }}
      >
        Buy
      </Button>
    </Box>
  );
};

export default Counter;
