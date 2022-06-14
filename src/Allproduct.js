import * as React from "react";
import {useState,useEffect} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import API from "../src/api"

export function Allproduct({ cam, cart, setcart }) {
  const[cam1,setcam]=useState([])
console.log(API)
 useEffect(()=>{
    fetch(`https://62a734fbbedc4ca6d7c4a9d0.mockapi.io/Products`)
    .then((data)=>data.json())
    .then((e)=>setcam(e))
  },[])
  // console.log(cam1)




  return (
    <div className="campro">
      <div className="makecenter">
        <h1>
          All Products
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
          
                  // })
                  // .then(()=>navigate(""));
                      
                    // setmovielist([...movielist, newaddedmovie]);
                  // }}

                    
                    // setcart([...cart, add]);



                  }}
                >Add to Cart</Button>

              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
