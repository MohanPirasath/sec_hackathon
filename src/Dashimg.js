import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { useNavigate } from "react-router-dom";

export function Dashimg() {
  const navigate = useNavigate();

  // const {navigate} = useNavigate()
  return (
    <div>
      <div className="dashimg">
        <div>
          <h1>
            {/* jones equipment services  */}
            JONES EQUIPMENT SERVICES
          </h1>
        </div>
        <div>
          <p>Digital platform for Renting the Products</p>
        </div>
        <div>
          <p>
            Camera's,Car's,Electrics equipments,Household Products <br /> are
            Avaible for Rents
          </p>
        </div>

        <div>
          <p>
            Products are rented in the based on Days and hours .<br /> Delivery
            also Avaible for Pre-booking Products
          </p>
        </div>

        <div>
          <h2>So What you are looking for</h2>
        </div>
        <div className="cat">
          <div className="icon_btn">
            <IconButton
            sx={{color:"black"}}
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
            sx={{color:"gray"}}

              onClick={() => navigate("/cars")}
              >
              <DirectionsCarIcon fontSize="inherit" />
            </IconButton>
            <h5>Car's</h5>
          </div>

          <div className="icon_btn">
            <IconButton aria-label="delete" size="large"
            sx={{color:"red"}}

              onClick={() => navigate("/Ele")}
            
            >
              <ElectricalServicesIcon fontSize="inherit" />
              
            </IconButton>
            <h5>Electrics Products</h5>
          </div>

          <div className="icon_btn icons_btn">
            <IconButton aria-label="delete" size="large"
            sx={{color:"green"}}

            onClick={()=>navigate("/House_product")}
            >
              <MapsHomeWorkIcon fontSize="inherit" />
            </IconButton>
            <h5>Household Products</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
