import * as React from "react";
import {useEffect,useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export function House_product() {
  const[cam1,setcam]=useState([])
  
  useEffect(()=>{
     fetch(`https://sec-node-hackathon.herokuapp.com/House_product`)
     .then((data)=>data.json())
     .then((e)=>setcam(e))
   },[])


  const Houseonly = cam1.filter((ele) => ele.cat === "Household");

  return (
    <div className="campro">
      <div className="makecenter">
        <h1>
          House Products
        </h1>
      </div>


      {/* {console.log(caronly)} */}
      {Houseonly.map((e) => {
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
                      id:e.id,
                      img: e.img,
                      des: e.des,
                      price: e.price,
                      cat: e.cat,
                    };
                    fetch(`https://sec-node-hackathon.herokuapp.com/House_product`,{method:"POST",body:JSON.stringify(add),
                    headers:{
                      "Content-type":"application/json"
                    }
                  }
                    )



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
