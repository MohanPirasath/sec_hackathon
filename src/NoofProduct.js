import * as React from "react";
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";

export function NoofProduct() {
  const [value, setvalue] = useState(+1);

  return (
    <div>
      <div className="makecenter_btns">
        <IconButton aria-label="delete" size="large" onClick={() => setvalue([value - 1])}>
          {/* <DeleteIcon fontSize="inherit" /> */}
          <RemoveIcon />
        </IconButton>

        Count: <span sx={{ color: "error" }}> {value}</span>
        <IconButton aria-label="delete" size="large" onClick={() => setvalue([value - (-1)])}>

          <AddIcon />
        </IconButton>

      </div>
      {value > 1 ? "sorry only one product available" : ""}

    </div>
  );
}
