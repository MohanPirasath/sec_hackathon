import * as React from "react";
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";

import Fab from '@mui/material/Fab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { Button } from "@mui/material";

export function Cartdate({ cart }) {


  const handleSubmit1 = (e)=>{
    e.preventDefault();
    if(Amount<0){
    alert("please enter valid amount");
    }else{
    // alert("Wait Razorpay is processing");

      var options = {
        key: "rzp_test_QnLDWaA7vOt7FJ",
        key_secret:"sD2Opg2yi6kajAPr52o2Zk9W",
        amount: Amount *100,
        currency:"INR",
        name:"john's rental services",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Mohan",
          email:"mohan3rc@gmail.com",
          contact:"790489553"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
  }


  const [value, setvalue] = useState(+0);
  const [Amount, setamount] = useState(100);

  return (
    <div className="makecenter_date">
      {/* <div>
            <h4>
              From
            </h4>
            <TextField id="standard-basic" label="" variant="standard"  type="date"/>
            </div> */}

      <div className="makecenter_btn">
        <IconButton aria-label="delete" size="large" onClick={() => {
          setvalue([value - 1]);
          setamount((100 * (value) - 100) * (cart.length));

        }}>
          {/* <DeleteIcon fontSize="inherit" /> */}
          <RemoveIcon />
        </IconButton>

        Hours: {value}
        <IconButton aria-label="delete" size="large" onClick={() => {
          setvalue([value - (-1)]);
          setamount((100 * (value) + 100) * (cart.length));
        }}>

          <AddIcon />
        </IconButton>

      </div>


      {/* <div>
            <h4>
              To
            </h4>
            <TextField id="standard-basic" label="" variant="standard"  type="date"/>
            </div> */}
      <div className="makecenterfil">
        <h2>
          Total Amount : {Amount}
        </h2>
      </div>
      <div className="checkout">
        {/* <Button onClick={handleSubmit1}> checkout</Button> */}
        <Fab variant="extended" onClick={handleSubmit1}>
          <CheckCircleIcon sx={{ mr: 1 }} />
          CHECK OUT
        </Fab>
      </div>

    </div>
  );
}
