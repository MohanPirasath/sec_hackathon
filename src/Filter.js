import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Filter() {
  const [CATEGORY, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="makecenterfil">
        <h1>Filter</h1>
      </div>
      <h5>
        CATEGORY
      </h5>
      <div>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={CATEGORY}
              label="CATEGORY"
              onChange={handleChange}
            >
              <MenuItem value={"cam"}>Camera</MenuItem>
              <MenuItem value={"car"}>Car's</MenuItem>
              <MenuItem value={"Ele"}>Electric Products</MenuItem>
              <MenuItem value={"House"}>Household Products</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
