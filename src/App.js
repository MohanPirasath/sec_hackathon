import "./App.css";

import * as React from "react";
import { useState } from "react";
// import AdbIcon from "@mui/icons-material/Adb";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import { useNavigate } from "react-router-dom";

import Fab from "@mui/material/Fab";

import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { useNavigate, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import API from "../src/api"

import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import { Dashimg } from "./Dashimg";
import { ResponsiveAppBar } from "./pages";
import { Camera } from "./Camera";
import { Cars } from "./Cars";
import { Electric } from "./Electric";
import { House_product } from "./House_product";
import { Allproduct } from "./Allproduct";
import { ChooseConcern } from "./ChooseConcern";
import { ContactUs } from "./ContactUs";
import { Filter } from "./Filter";
import { Cart } from "./Cart";
import { Adminlogin } from "./Adminlogin";
import { AdminResponsiveAppBar } from "./pages.1";
import { Adminhome } from "./Adminhome";
import { useFormik } from "formik";
import * as yup from "yup";
import { Order } from "./Order";
import { EditProduct } from "./EditProduct";
import { Feed } from "./Feed";
import { AddProduct } from "./AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={[<ResponsiveAppBar />, <Dashimg />]} />
        <Route path="/404" element={[<ResponsiveAppBar />,<Fournotfour/>]} />
        <Route path="*" element={[<ResponsiveAppBar />,<Fournotfour/>]} />
        <Route path="/" element={[<Login />]} />
        <Route path="/cart" element={[<ResponsiveAppBar />, <Cart />]} />
        <Route path="/cam" element={[<ResponsiveAppBar />, <Camera />]} />
        <Route
          path="/ChooseConcern"
          element={[<ResponsiveAppBar />, <ChooseConcern />]}
        />
        <Route path="/cars" element={[<ResponsiveAppBar />, <Cars />]} />
        <Route path="/Ele" element={[<ResponsiveAppBar />, <Electric />]} />
        <Route path="/filter" element={[<ResponsiveAppBar />, <Filter />]} />
        <Route
          path="/Admin/FormFeedback"
          element={[<AdminResponsiveAppBar />, <Feed />]}
        />
        <Route
          path="/Admin/Orders"
          element={[<AdminResponsiveAppBar />, <Order />]}
        />
        <Route
          path="/ALLPRODUCT"
          element={[<ResponsiveAppBar />, <Allproduct />]}
        />
        <Route
          path="/House_product"
          element={[<ResponsiveAppBar />, <House_product />]}
        />
        <Route
          path="/ContactUs"
          element={[<ResponsiveAppBar />, <ContactUs />]}
        />
        <Route path="/Admin" element={[<Adminlogin />]} />
        <Route path="/Admin/Edit/:id" element={[<Edit />]} />
        <Route
          path="/Admin/Home"
          element={[<AdminResponsiveAppBar />, <Adminhome />]}
        />
        <Route
          path="/Admin/EditProduct"
          element={[<AdminResponsiveAppBar />, <EditProduct />]}
        />
        <Route
          path="/Admin/AddProduct"
          element={[<AdminResponsiveAppBar />, <AddProduct />]}
        />
      </Routes>
    </div>
  );
}

function Login() {

// const API ="https://sec-node-hackathon.herokuapp.com";
const API ="http://localhost:5000";
  const loginsubmit = async (event) => {
    event.preventDefault();
    try {
      const fet = await fetch(`${API}/login`, {
        method: "POST",
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
        headers: {
          "Content-type": "application/json",
        },
        // credentials: "include",
      });
      if (fet.status === 400 || !fet) {
        window.alert("Invalid credentials");
      } else {
        // localStorage.setItem("username", values.tempuser);
        window.alert("successfull login");
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const signupsubmit = async (event) => {
    event.preventDefault();
    try {
      const fet = await fetch(`${API}/signup`, {
        method: "POST",
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
        headers: {
          "Content-type": "application/json",
        },
        // credentials: "include",
      });
      if (fet.status === 400 || !fet) {
        window.alert("username already exist try another username");
      } else {
        // localStorage.setItem("username", values.tempuser);
        window.alert("signup successful login now");
       
      }
    } catch (err) {
      console.log(err);
    }
  };


  const formvalidationSchema = yup.object({
    username: yup
      .string()
      .required("Plz Fill up the Username")
      .min(4, "Needed long username"),
    password: yup
      .string()
      .required("Plz Fill up the Username")
      .min(4, "Needed long password"),
  });

  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: formvalidationSchema,
      // onSubmit: () => navigate("/Home"),
    });

  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form className="form">
          <TextField
            id="filled-basic"
            name="username"
            value={values.username}
            error={errors.username && touched.username}
            helperText={
              errors.username && touched.username ? errors.username : ""
            }
            onBlur={handleBlur}
            onChange={handleChange}
            label="UserName"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            name="password"
            value={values.password}
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
            onBlur={handleBlur}
            onChange={handleChange}
            label="Password"
            variant="filled"
          />
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ width: "210px" }}
            onClick={loginsubmit}
          >
            <LockOpenIcon sx={{ mr: 1 }} />
            Login
          </Fab>
        </form>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          sx={{ width: "210px", marginTop: "15px" }}
          onClick={signupsubmit}
        >
          <LockOpenIcon sx={{ mr: 1 }} />
          Signup
        </Fab>
        <hr></hr>
        <div>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ width: "210px" }}
            onClick={() => navigate("/Admin")}
          >
            <LoginIcon sx={{ mr: 1 }} />
            Admin login
          </Fab>
        </div>
      </div>
    </div>
  );
}


function Fournotfour(){
  return(
    <div className="makethiscenter">
      <h1>
        404 ERROR
      </h1>
    </div>
  )
}



function Edit() {
  const { id } = useParams();

  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required ⚠️")
      .min(3, "Name must be at least 3️⃣ characters long"),
    des: yup
      .string()
      .required("description is required ⚠️")
      .min(3, "description must be at least 3️⃣ characters long"),
    price: yup
      .string()
      .required("price is required ⚠️")
      .max(9999999999, "price must be at least 🔟 characters long"),
    img: yup
      .string()
      .required("image is required ⚠️")
      .min(3, "image must be at least 3️⃣ characters long"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: localStorage.getItem("name"),
        des: localStorage.getItem("des"),
        price: localStorage.getItem("price"),
        img: localStorage.getItem("img"),
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        Ed(values);
      },
    });

  const navigate = useNavigate();

  const Ed = (newproduct) => {
    fetch(`https://sec-node-hackathon.herokuapp.com/Admin/Edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(newproduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/Admin/EditProduct");
  };

  const [temid, setid] = useState(localStorage.getItem("id"));

  const [cat, setcat] = useState(localStorage.getItem("cat"));
  const [CATEGORY, setAge] = useState(localStorage.getItem("cat"));
  const handleChange1 = (event) => {
    setAge(event.target.value);
    setcat(event.target.value);
  };

  return (
    <div>
      <div className="makecenterfil">
        <h1>Edit Products</h1>
      </div>
      <div>
        <form className="form">
          <TextField
            id="id"
            type="number"
            name="id"
            onBlur={handleBlur}
            error={errors.id && touched.id}
            helperText={errors.id && touched.id ? errors.id : ""}
            defaultValue={temid}
            onChange={(e) => setid(e.target.value)}
            label="No of Product"
            variant="standard"
            sx={{ width: "400px" }}
          />
          <TextField
            id="name"
            // defaultvalue={temname}
            defaultValue={values.name}
            onBlur={handleBlur}
            name="name"
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
            onChange={handleChange}
            // onChange={(e) => setname(e.target.value)}
            label="Product Name"
            variant="standard"
            sx={{ width: "400px" }}
          />
          {/* {console.log(temname)} */}
          <TextField
            id="img"
            defaultValue={values.img}
            onBlur={handleBlur}
            name="img"
            error={errors.img && touched.img}
            helperText={
              errors.cameraname && touched.cameraname ? errors.cameraname : ""
            }
            // onChange={(e) => setimg(e.target.value)}
            onChange={handleChange}
            label="Img Src"
            variant="standard"
            sx={{ width: "400px" }}
          />
          {/* {console.log(Img)} */}

          <TextField
            id="about"
            // onChange={(e) => setabout(e.target.value)}
            onChange={handleChange}
            defaultValue={values.des}
            onBlur={handleBlur}
            error={errors.des && touched.des}
            helperText={errors.des && touched.des ? errors.des : ""}
            name="des"
            label="About"
            variant="standard"
            sx={{ width: "400px" }}
          />
          <TextField
            id="price"
            // onChange={(e) => setprice(e.target.value)}
            onChange={handleChange}
            defaultValue={values.price}
            onBlur={handleBlur}
            error={errors.price && touched.price}
            helperText={errors.price && touched.price ? errors.price : ""}
            name="price"
            label="Price"
            variant="standard"
            sx={{ width: "400px" }}
          />

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                SELECT CATEGORY
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={cat}
                label="CATEGORY"
                onChange={handleChange1}
              >
                <MenuItem value={"cam"}>Camera</MenuItem>
                <MenuItem value={"car"}>Car's</MenuItem>
                <MenuItem value={"Ele"}>Electric Products</MenuItem>
                <MenuItem value={"Household"}>Household Products</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              const newproduct = {
                name: values.name,
                img: values.img,
                des: values.des,
                id: temid,
                price: values.price,
                cat: cat,
              };

              Ed(newproduct);
              // fetch(`https://sec-node-hackathon.herokuapp.com/Admin/Edit/${id}`,{
              //   method:"PUT",body: JSON.stringify(newproduct),headers:{
              //     "Content-Type":"application/json"
              //   }
              // })
              // navigate("/Admin/EditProduct")
            }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
