
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';


function Login() {

    const [userName, setUserName] = useState(false);
    const [password, setPassword] = useState(false);

    async function login(e){
       e.preventDefault();

       let item = {userName , password};
       let result = await fetch(global.APIUrl+"/staff/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      
      if( (JSON.stringify(result.message) === '"Editor"') || (JSON.stringify(result.message) === '"Admin"')){
          Cookies.set('userType',JSON.stringify(result.message), { expires: 70000, path: '' });
  
          	Swal.fire({  
			title: "Success!",
			text: "Login Success",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin/Admin_Dashboard";
				}
			});
      }else{
          	Swal.fire({  
			title: "Error!",
			text: "Login Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
       }
    }

      return (
    <div>
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
      )
};


export default Login;