import * as React from "react";
import {useEffect,useState }from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export function Cars({ cam, cart, setcart }) {
  const[cam1,setcam]=useState([])
  
  useEffect(()=>{
     fetch(`https://sec-node-hackathon.herokuapp.com/cars`)
     .then((data)=>data.json())
     .then((e)=>setcam(e))
   },[])

  const caronly = cam1.filter((car) => car.cat === "car");

  return (
    <div className="campro">
      <div className="makecenter">
        <h1>
          Cars
        </h1>
      </div>

      {/* {console.log(caronly)} */}
      {caronly.map((e) => {
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
                  About the product: {e.des}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price : {e.price}/<span>hour</span>
                </Typography>

              </CardContent>
              <CardActions>
                <Button sx={{ marginLeft: "auto", marginRight: "auto" }} size="small"

                  onClick={() => {
                    const add = {
                      name: e.name,
                      img: e.img,
                      des: e.des,
                      price: e.price,
                      cat: e.cat,
                    };
                    fetch(`https://62a734fbbedc4ca6d7c4a9d0.mockapi.io/Cart`,{method:"POST",body:JSON.stringify(add),
                    headers:{
                      "Content-type":"application/json"
                    }
                  }
                    )


                  }}>

                  Add to Cart</Button>

              </CardActions>
            </Card>
          </div>
        );

      })}

    </div>
  );
}
