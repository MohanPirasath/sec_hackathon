import * as React from "react";
import Fab from "@mui/material/Fab";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from 'formik';
import * as yup from 'yup';

export function Adminlogin() {
  
  const formvalidationSchema = yup.object({
    AdminID:yup.string().required("Plz Fill up the Username").min(4,"Needed long username"),
    password:yup.string().required("Plz Fill up the Username").min(4,"Needed long password")
  })

  const {handleChange,handleBlur,values,errors,touched,handleSubmit}=useFormik({
    initialValues:{
      AdminID:"",
      password:""
    },
    validationSchema: formvalidationSchema,
    onSubmit:(()=>navigate("/Home"))

  })
  const navigate = useNavigate();
  return (
    <div>
      <div className="makecenterfil">
        <h1>ADMIN LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <TextField id="filled-basic" 
        name="AdminID" 
        value={values.AdminID}
        error={errors.AdminID && touched.AdminID} 
        helperText={errors.AdminID && touched.AdminID ? errors.AdminID : ""}
        onBlur={handleBlur} 
        onChange={handleChange}
        // label="UserName" 
        label="Admin Id" 
        variant="filled" />
        <TextField id="filled-basic" 
         name="password" 
         value={values.password}
         error={errors.password && touched.password} 
         helperText={errors.password && touched.password ? errors.password : ""}
         onBlur={handleBlur} 
         onChange={handleChange}
        label="Password" 
        variant="filled" />
        <Fab
          variant="extended"
          color="primary"
          type="submit"
          aria-label="add"
          sx={{ width: "210px" }}
          onClick={() => navigate("/Admin/Home")}
        >
          <LockOpenIcon sx={{ mr: 1 }} />
          Admin Login
        </Fab>
      </form>
    </div>
  );
}
