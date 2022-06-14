import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export function EditProduct() {


  const navigate = useNavigate();


  const handleEdit = ({ id, name, des, price, img }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("des", des);
    localStorage.setItem("price", price);
    localStorage.setItem("img", img);
  };


  const [cam1, secam] = useState([]);


  const handledelete = async (id) => {
    await fetch("https://sec-node-hackathon.herokuapp.com/Admin/EditProduct/" + id, { method: "DELETE" });
    secam(cam1.filter(data => data.id !== id));
  };


  const Re = () => {
    useEffect(() => {
      fetch(`https://sec-node-hackathon.herokuapp.com/ALLProduct`)
        .then((data) => data.json())
        .then((e) => secam(e));
    }, [cam1]);
  };
  Re();
  console.log(cam1);

  return (
    <div className="campro">
      <div className="makecenter">
        <h2>Edit products</h2>
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
                  About the product: {e.des}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price : {e.price}/<span>hour</span>
                </Typography>
              </CardContent>
              <CardActions>

                <Button onClick={() => {

                  handleEdit(e);
                  navigate(`/Admin/Edit/${e.id}`);


                }}>Edit</Button>


                <Button
                  onClick={() => {

                    handledelete(e.id);
                    secam(cam1.filter(data => data.id !== e.id));
                    Re();

                  }}
                >
                  Delete
                </Button>

              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
