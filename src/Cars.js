import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export function Cars() {
  // const navigate = useNavigate();
  const [cam1, setcam] = useState([]);

  // const add = ({ id, name, img, des, price, cat }) => {
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("img", img);
  //   localStorage.setItem("des", des);
  //   localStorage.setItem("price", price);
  //   localStorage.setItem("cat", cat);
  //   navigate("/Cart");
  // };

  useEffect(() => {
    fetch(`https://sec-node-hackathon.herokuapp.com/cars`)
      .then((data) => data.json())
      .then((e) => setcam(e));
  }, []);

  const caronly = cam1.filter((car) => car.cat === "car");

  return (
    <div className="campro">
      <div className="makecenter">
        <h1>Cars</h1>
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
                alt={e.name}
              />
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
                <Button
                  sx={{ marginLeft: "auto", marginRight: "auto" }}
                  size="small"
                  // onClick={()=>{             
                  //   localStorage.setItem("id", e.id);
                  //   localStorage.setItem("name", e.name);
                  //   localStorage.setItem("img", e.img);
                  //   localStorage.setItem("des", e.des);
                  //   localStorage.setItem("price", e.price);
                  //   localStorage.setItem("cat", e.cat);
                  //   navigate("/Cart");}
                  // }
                  onClick={
                       ()=>{
const add={
  name:e.name,
  id:e.id,
  img:e.img,
  des:e.des,
  price:e.price,
  cat:e.cat
}

                    console.log(add)
                    fetch(`https://sec-node-hackathon.herokuapp.com/cars`,{method:"POST",body:JSON.stringify(add),
                    headers:{
                      "Content-type":"application/json"
                    }
                  }
                    )

                  }
                }

                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
