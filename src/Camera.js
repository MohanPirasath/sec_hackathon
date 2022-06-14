import * as React from "react";
import {useEffect,useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export function Camera({ cam, setcart, cart }) {
  const[cam1,setcam]=useState([])
  
   useEffect(()=>{
      fetch(`https://sec-node-hackathon.herokuapp.com/cam`)
      .then((data)=>data.json())
      .then((e)=>setcam(e))
    },[])
// console.log(cam1)
  const canonly = cam1.filter((cam) => cam.cat === "cam");

  return (
    <div className="campro">
      <div className="makecenter">
        <h1>
          Camera's For Rent
        </h1>
      </div>

      {/* {console.log(canonly)} */}
      {canonly.map((e) => {
        return (

          <div className="card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={e.img}
                alt={e.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  About the Product : {e.des}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price : {e.price}/<span>hour</span>
                </Typography>

              </CardContent>
              <CardActions>

                <Button sx={{ marginLeft: "auto", marginRight: "auto" }} onClick={() => {
                  const add = {
                    name: e.name,
                    img: e.img,
                    des: e.des,
                    price: e.price,
                    cat: e.cat,
                  };
                  fetch(`https://sec-node-hackathon.herokuapp.com/Cart`,{method:"POST",body:JSON.stringify(add),
                  headers:{
                    "Content-type":"application/json"
                  }
                }
                  )



                }} size="small">Add to Cart</Button>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </div>
        );

      })}

    </div>
  );
}
