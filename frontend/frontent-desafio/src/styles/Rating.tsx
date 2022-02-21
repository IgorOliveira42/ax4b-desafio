import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type value = {
    value: number;
  };

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue: any) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
