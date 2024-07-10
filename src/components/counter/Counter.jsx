import React from 'react';
import { Button, Typography, Box } from '@mui/material';

export const Counter = ({ restar, contador, sumar, onBuy }) => {
  const handleBuy = () => {
    if (typeof onBuy === 'function') {
      onBuy(); // Llama a la función onBuy definida en CounterContainer
    }
  };

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
        onClick={handleBuy} // Llama a handleBuy cuando se hace clic en "Buy"
        sx={{ backgroundColor: '#622f0b', '&:hover': { backgroundColor: '#6e4d35' } }}
      >
        Buy
      </Button>
    </Box>
  );
};

export default Counter;
