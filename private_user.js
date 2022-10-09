
import React, { useState , useEffect } from 'react';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';
  import NumberFormat from 'react-number-format';
  import '../../admin_css.css';
  import Navbar from "./adminNav";
  import "../APIUrl";

function PrivateUser() {
  
  const [emailStatus, setEmailStatus] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [email , setEmail] =  useState("");
  const [tel , setTel] =  useState("");
  const [fax , setFax] =  useState("");

  function setFunEmail(e){
    const email_Add = e;
    if(validateEmail(email_Add)){
      setEmailStatus("Email is valid");
      setEmailColor('green');
    }else{
      setEmailStatus("Email is invalid");
      setEmailColor('red');
    }
    setEmail(email_Add);
  }

  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

    return (
        <div>
            <div class="dashboard-main-wrapper">
                <Navbar/>
                <div class="dashboard-wrapper">
                <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h2 className="text-uppercase  d-letter-spacing fw-bold d_font_family" style={{color:'black' }}><i class="bi bi-house-door-fill"></i> Dashboard</h2>
                    <h5 className="text-dark" style={{fontWeight:'100' ,  lineHeight:'0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manage Private Users</h5>
                    <hr/>

                    <MDBTable className="mt-5">
                        <MDBTableHead>
                            <tr style={{backgroundColor:'#3A3A3A'}}>
                                <th className="text-white pt-3 pb-3 " ><span >ID</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >First Name</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >Last Name</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >NIC</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >Mobile Number</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >Email</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >Address</span></th>
                                <th className="text-white pt-3 pb-3 " ><span >Action</span></th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                      
                        </MDBTableBody>
                    </MDBTable>

                </div>
                </div>
            </div>
        </div>
    )
};


export default PrivateUser;