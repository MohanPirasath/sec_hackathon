import * as React from "react";
import Fab from "@mui/material/Fab";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function Adminlogin() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="makecenterfil">
        <h1>ADMIN LOGIN</h1>
      </div>
      <form className="form">
        <TextField id="filled-basic" label="Admin Id" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          sx={{ width: "210px" }}
          onClick={() => navigate("/Admin/Home")}
        >
          <LockOpenIcon sx={{ mr: 1 }} />
          Admin Login
        </Fab>
      </form>
    </div>
  );
}
