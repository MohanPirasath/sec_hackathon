import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';

export function ContactUs() {

  const [CATEGORY, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="padleft">
      <h1>
        WELCOME TO JOHN'S RENTING SERVICES
      </h1>
      <p>
        Our john's Renting services is Number one company And the rating of the company is 4.5 starts.
        The every product which is renting is top level in qulity. The Customer can rent the product in the based on Hours pakage and days pakage .
        The ID Proofs and advance must be submited before Renting the products.<br />
        We can Provid Top level Camera's if you order before an Week.
        For any douts You can contact us between 9.00AM to 9.00PM.<br />

        We attached the Contact us form below for any queries

      </p>
      <div className="makecentercon">

        <h2>
          Contact Us Form
        </h2>
        <form className="form">

          <TextField
            required
            id="outlined-required"
            label="Name"
            placeholder="Name" />
          <TextField
            required
            id="outlined-required"
            label="Address"
            placeholder="Address" />
          <TextField
            required
            id="outlined-required"
            type="number"
            label="Contact Number"
            placeholder="Number" />
          <TextField
            required
            id="outlined-required"
            type="email"
            label="E-Mail"
            placeholder="E-mail id" />

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">SELECT CATEGORY</InputLabel>
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


          <TextField
            // required
            id="outlined-required"
            label="convertion bar"
            placeholder="" />


          <Fab variant="extended" sx={{ width: "220px", marginBottom: "20px" }}>
            {/* <NavigationIcon sx={{ mr: 1 }} /> */}
            SUBMIT
          </Fab>

        </form>

      </div>
    </div>
  );
}
