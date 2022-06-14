import * as React from "react";
import {useState,useEffect}from "react";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Cartdate } from "./Cartdate";
import { NoofProduct } from "./NoofProduct";
import { Button } from "@mui/material";



export function Cart({ cart }) {


 


  const[cam1,setcam]=useState([])
  const [len,selen]=useState(cam1.length)
  
  const Re = ()=>{
  useEffect(()=>{
     fetch(`https://62a734fbbedc4ca6d7c4a9d0.mockapi.io/Cart`)
     .then((data)=>data.json())
     .then((e)=>setcam(e))
   },[len,cam1])
  }
Re()
  return (
    <div className="campro">
      <div className="makecenter">
        <h1>
          Cart
        </h1>
      </div>
      {cam1.map((e) => {
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
                  About the Product: {e.des}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {e.price}/<span>hour</span>
                </Typography>

              </CardContent>
              <CardActions>
                {/* <Button sx={{marginLeft:"auto",marginRight:"auto"}} size="small">Add to Cart</Button> */}
                <NoofProduct />
                <div>
                <Button  onClick={()=>{
                 
                 const Deletemovie = (id) => {
                   fetch(`https://62a734fbbedc4ca6d7c4a9d0.mockapi.io/Cart/${e.id}`, { method: "DELETE" })
                     .then(() => Re())
                     .then(() => selen(len+1))
                     .then((res) => console.log(res))
                 };
                 Deletemovie()
                }
                
                }>Remove item</Button>

                  
                </div>

              </CardActions>
            </Card>

          </div>
        );
      })}

      <Cartdate cart={cam1} />
      {/* <Cart_btns /> */}
      


    </div>
  );
}
