import React from "react";
import "./signIn.css";
import { FormControlLabel, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(fields) => {
        navigate("/");
      }}
    >
      {({ errors, status, touched }) => (
        <section className="form-container">
          <h2>Sign in</h2>
          <Form className="sign-form">
            <div className="form-group">
              <Field
                name="email"
                type="text"
                placeholder="Hello@example.com"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <div className="form-remember">
                <FormControlLabel
                  control={<Switch sx={{ overflow: "visible" }} />}
                  label="Remember me"
                />
                <div className="forgot-pass">
                  <Link to="/reset" className="forgot">
                    Forgot Password ?
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn-create">
                Sign in
              </button>
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <span className="signup-lnk">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </span>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default SignIn;
