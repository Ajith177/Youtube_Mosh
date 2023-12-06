import React, { useState } from "react";
import "./Page.css";

function Page() {
  // const [err, setErr] = useState(false)

  const [error, setError] = useState({
    email:  false ,
    password: false ,
    name:  false ,
    custom_error: null
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(new Date().getFullYear())
    if (input.name === " " && input.email===" " && input.password===" ") {
      console.log(input.name);
      alert("helloworld")
      error.name = true;
      error.email=true;
      error.password = true;
      // console.log(error.name.required);
      // error.password.required = true;
      // error.email.required = true;
    }
     else { 
      console.log(input.name);
      // setLoading(true);
    }
  };

  const handleInput = (e) => {
    input.name = e.target.value;
  };

  return (
    <div>
      <section className="register-block">
        <div className="container">
          <div className="row ">
            <div className="col register-sec">
              <h2 className="text-center">Register Now</h2>
              <form className="register-form" action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                    // value={names}
                    name="name"
                    id="l"
                  />
                  {error.name? 
                    <p className="text-danger">Name is required.</p>
                   : 
                    ""
                  }
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                   
                    name="email"
                    id="m"
                  />
                  {error.email == true ? 
                    <span className="text-danger">Email is required.</span>
                   : (
                    " "
                  )}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={handleInput}
                    
                    name="password"
                    id="n"
                  />
                  {error.password == true ? 
                    <span className="text-danger">Password is required.</span>
                   : (
                    " "
                  )}
                </div>
                <div className="form-group">
                  {error.custom_error === true ? (
                    <span className="text-danger">
                      <p>Custom Error Message!</p>
                    </span>
                  ) : (
                    " "
                  )}
                  {loading ? (
                    <div className="text-center">
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                  <input
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={handleSubmit}
                    disabled={loading}
                    value="Register"
                  />
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  Already have account ? Please <a href="#">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

// function hello(){
//   let a=100;
//   setTimeout(()=>{
//     console.log(a)
//   },4000);
//   console.log("helloworld")

//   setTimeout(()=>{
//     console.log("we are zybisyian")
//   },2000);
// }

// function welcome(hello){
//   hello()
//   console.log("welcome-message")
  
// }

// welcome(hello)


// console.log("ajith")



