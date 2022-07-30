import React, { useState } from "react";

const Formlogin = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [error, setError] = useState({
    userEmailError: null,
    userPasswordError: null,
  });

  const emailRegex = 
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleInputRegex = (evt) => {
    if (evt.target.name == "userEmail") {
      setUser({
        ...user,
        userEmail: evt.target.value,
      });
      setError({
        ...error,
        userEmailError:
          emailRegex.test(evt.target.value) ? "" : "Not a valid email",
      });
    }else if(evt.target.name == "userPassword"){
      setUser({
        ...user,
        userPassword: evt.target.value,
      });
      setError({
        ...error,
        userPasswordError:
          passwordRegex.test(evt.target.value) ? "" : "Minimum 8 characters, at least one letter, one number and one special character",
      });
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container w-50 my-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="userEmail"
              onChange={(e) => handleInputRegex(e)}
              value={user.userEmail}
            />
            <small className="text-danger">{error.userEmailError}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="userPassword"
              onChange={(e) => handleInputRegex(e)}
              value={user.userPassword}
            />
            <small className="text-danger">{error.userPasswordError}</small>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Formlogin;
