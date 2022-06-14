import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { useNavigate } from "react-router-dom";

export function ChooseConcern() {


 
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        CATEGORY
      </h1>
      <div className="cat">
        <div className="icon_btn">
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => navigate("/cam")}
          >
            <PhotoCameraIcon fontSize="inherit" />
          </IconButton>
          <h5>Camera</h5>
        </div>

        <div className="icon_btn">
          <IconButton aria-label="delete" size="large"
            onClick={() => navigate("/cars")}
          >
            <DirectionsCarIcon fontSize="inherit" />
          </IconButton>
          <h5>Car's</h5>
        </div>

        <div className="icon_btn">
          <IconButton aria-label="delete" size="large"
            onClick={() => navigate("/Ele")}

          >
            <ElectricalServicesIcon fontSize="inherit" />

          </IconButton>
          <h5>Electrics Products</h5>
        </div>

        <div className="icon_btn icons_btn">
          <IconButton aria-label="delete" size="large"
            onClick={() => navigate("/House_product")}
          >
            <MapsHomeWorkIcon fontSize="inherit" />
          </IconButton>
          <h5>Household Products</h5>
        </div>
      </div>
    </div>
  );
}
