import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function ContactUs() {



  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required ⚠️")
      .min(3, "Name must be at least 3️⃣ characters long"),
    Address: yup
      .string()
      .required("Address is required ⚠️")
      .min(15, "Address must be at least 15 characters long"),
    // price: yup
    //   .string()
    //   .required(" is required ⚠️")
    //   .max(9999999999, "price must be at least  characters long"),
    Contactnum: yup
      .string()
      .required("Contact number is required ⚠️")
      .min(3, "image must be at least 3️ characters long"),
    EmailID: yup.string().required("plz fill the email ").min(5,"email must be lengther"),
    bar: yup.string().required("plz select any one").min(15),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { name: "", Address: "", Contactnum: "", EmailID: "", bar: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });




  const [CATEGORY, setAge] = React.useState('');
  const navigate=useNavigate()

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="padleft">
      <h1>
        WELCOME TO JOHN'S RENTING SERVICES
      </h1>
      <p>
        Our john's Renting services is Number one company And the rating of the company is 4.5 starts.
        The every product which is renting is top level in qulity. The Customer can rent the product in the based on Hours pakage and days pakage .
        The ID Proofs and advance must be submited before Renting the products.<br />
        We can Provid Top level Camera's if you order before an Week.
        For any douts You can contact us between 9.00AM to 9.00PM.<br />

        We attached the Contact us form below for any queries

      </p>
      <div className="makecentercon">

        <h2>
          Contact Us Form
        </h2>
        <form className="form">

          <TextField
            required
            id="outlined-required"
            name="name"
            onChange={handleChange}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
            onBlur={handleBlur}
            value={values.name}
            label="Name"
            placeholder="Name" />
          <TextField
            required
            id="outlined-required"
            name="Address"
            onChange={handleChange}
            error={errors.Address && touched.Address}
            helperText={errors.Address && touched.Address ? errors.Address : ""}
            onBlur={handleBlur}
            value={values.Address}
            label="Address"
            placeholder="Address" />
          <TextField
            required
            id="outlined-required"
            name="Contactnum"
            onChange={handleChange}
            error={errors.Contactnum && touched.Contactnum}
            helperText={errors.Contactnum && touched.Contactnum ? errors.Contactnum : ""}
            onBlur={handleBlur}
            value={values.Contactnum}
            type="number"
            label="Contact Number"
            placeholder="Number" />
          <TextField
            required
            id="outlined-required"
            name="EmailID"
            onChange={handleChange}
            error={errors.EmailID && touched.EmailID}
            helperText={errors.EmailID && touched.EmailID ? errors.EmailID : ""}
            onBlur={handleBlur}
            value={values.EmailID}
            type="email"
            label="E-Mail"
            placeholder="E-mail id" />

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">SELECT CATEGORY</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={CATEGORY}
                label="CATEGORY"
                onChange={handleChange1}
              >
                <MenuItem value={"cam"}>Camera</MenuItem>
                <MenuItem value={"car"}>Car's</MenuItem>
                <MenuItem value={"Ele"}>Electric Products</MenuItem>
                <MenuItem value={"House"}>Household Products</MenuItem>
              </Select>
            </FormControl>
          </Box>


          <TextField
            // required
            id="outlined-required"
            name="bar"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.bar && touched.bar}
            helperText={errors.bar && touched.bar ? errors.bar : ""}
            value={values.bar}
            label="convertion bar"
            placeholder="" />


          <Fab variant="extended" sx={{ width: "220px", marginBottom: "20px" }}
          onClick={()=>{
            alert("Form Submited")
            navigate("/Home")}}
          >
            {/* <NavigationIcon sx={{ mr: 1 }} /> */}
            SUBMIT
          </Fab>

        </form>

      </div>
    </div>
  );
}
