import React, { useState } from "react";

const Formregister = () => {
  const [user, setUser] = useState({
    name: "",
    userEmail: "",
    userName: "",
    userPassword: "",
    userConfirmPassword: "",
  });

  const [error, setError] = useState({
    nameError: null,
    userEmailError: null,
    userNameError: null,
    userPasswordError: null,
    userConfirmPasswordError: null,
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
    } else if (evt.target.name == "name") {
        setUser({
          ...user,
          name: evt.target.value,
        });
        setError({
          ...error,
          nameError:
           evt.target.value == "" ? "Requird" : "" ,
        });
    }else if (evt.target.name == "userName") {
      setUser({
        ...user,
        userName: evt.target.value,
      });
      setError({
        ...error,
        userNameError:
         evt.target.value == "" ? "Requird" : evt.target.value.includes(" ") ? "should not include any spaces": "",
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
    }else if(evt.target.name == "userConfirmPassword"){
      setUser({
        ...user,
        userConfirmPassword: evt.target.value,
      });
      setError({
        ...error,
        userConfirmPasswordError:
        evt.target.value == user.userPassword ? "" : "Not Matched",
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
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => handleInputRegex(e)}
              value={user.name}
            />
            <small className="text-danger">{error.nameError}</small><br/>
            <div/>
            <label className="form-label">
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
            <label className="form-label">
            User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={(e) => handleInputRegex(e)}
              value={user.userName}
            />
            <small className="text-danger">{error.userNameError}</small><br/>
          <div className="mb-3">
            <label className="form-label">
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
          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="userConfirmPassword"
              onChange={(e) => handleInputRegex(e)}
              value={user.userConfirmPassword}
            />
            <small className="text-danger">{error.userConfirmPasswordError}</small>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default Formregister;
