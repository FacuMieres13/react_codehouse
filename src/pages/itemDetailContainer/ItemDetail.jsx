import React from 'react';
import CounterContainer from "../../components/counter/CounterContainer";
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ItemDetail = ({ item }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          component="img"
          alt={item.title}
          height="200"
          image={item.thumbnail}
          title={item.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontFamily: '"Exo 2", sans-serif' }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.short_description}
          </Typography>
          <Box mt={2}>
            <CounterContainer />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemDetail;
