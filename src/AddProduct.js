import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddProduct() {
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
    id: yup.string().required().min(2),
    cat: yup.string().required("plz select any one"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { name: "", id: "", des: "", price: "", img: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      AddProduct(values);
    },
  });

  const AddProduct = (newproduct) => {
    fetch(`https://sec-node-hackathon.herokuapp.com/Admin/AddProduct`, {
      method: "POST",
      body: JSON.stringify(newproduct),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/Admin/EditProduct");
    });
  };

  const navigate = useNavigate();

  // const [temname, setname] = useState();
  const [temid, setid] = useState();
  // const [Img, setimg] = useState();
  // const [About, setabout] = useState();
  // const [price, setprice] = useState();
  const [cat, setcat] = useState();
  const [CATEGORY, setAge] = React.useState("");
  const handleChange1 = (event) => {
    setAge(event.target.value);
    setcat(event.target.value);
  };
  return (
    <div>
      <div className="makecenterfil">
        <h1>Add Products</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            id="id"
            // value={values.id}
            onBlur={handleBlur}
            error={errors.id && touched.id}
            helperText={errors.id && touched.id ? errors.id : ""}
            name="id"
            type="number"
            onChange={(e) => setid(e.target.value)}
            // onChange={ handleChange}
            label="No of Product"
            variant="standard"
            sx={{ width: "400px" }} />
          <TextField
            id="name"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.cameraname : ""}
            // onChange={(e) => setname(e.target.value)}
            onChange={handleChange}
            label="Product Name"
            variant="standard"
            sx={{ width: "400px" }} />
          {/* {console.log(temname)} */}
          <TextField
            id="img"
            name="img"
            value={values.img}
            onBlur={handleBlur}
            error={errors.img && touched.img}
            helperText={errors.img && touched.img ? errors.img : ""}
            // onChange={(e) => setimg(e.target.value)}
            onChange={handleChange}
            label="Img Src"
            variant="standard"
            sx={{ width: "400px" }} />
          {/* {console.log(Img)} */}

          <TextField
            id="about"
            name="des"
            value={values.des}
            onBlur={handleBlur}
            error={errors.des && touched.des}
            helperText={errors.des && touched.des ? errors.des : ""}
            // onChange={(e) => setabout(e.target.value)}
            onChange={handleChange}
            label="About"
            variant="standard"
            sx={{ width: "400px" }} />
          <TextField
            id="price"
            name="price"
            value={values.price}
            onBlur={handleBlur}
            error={errors.price && touched.price}
            helperText={errors.price && touched.price ? errors.price : ""}
            // onChange={(e) => setprice(e.target.value)}
            onChange={handleChange}
            label="Price"
            variant="standard"
            sx={{ width: "400px" }} />

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                SELECT CATEGORY
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                name="CATEGORY"
                id="demo-simple-select"
                value={CATEGORY}
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
          {console.log(values)}

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
              console.log(newproduct);

              AddProduct(newproduct);

              // fetch(
              //   `https://sec-node-hackathon.herokuapp.com/Admin/AddProduct`,
              //   {
              //     method: "POST",
              //     body: JSON.stringify(newproduct),
              //     headers: {
              //       "Content-type": "application/json",
              //     },
              //   }
              // ).then(() => {
              //   navigate("/Admin/EditProduct");
              // });
            }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}
