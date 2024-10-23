import React from 'react';
import './TodosLoading.css';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function TodosLoading(){
    return (
      <>
        <Box className='circularProgress' sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

export {TodosLoading};