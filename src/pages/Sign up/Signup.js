import React from "react";
import "./signUp.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormControlLabel, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(fields) => {
        navigate("/verify-email");
      }}
    >
      {({ errors, status, touched }) => (
        <section className="form-container">
          <h2>Create your account</h2>
          <Form className="sign-form">
            <div className="form-group">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className={
                  "form-control" +
                  (errors.name && touched.name ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </div>

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
              <FormControlLabel
                control={<Switch sx={{ overflow: "visible" }} />}
                label="I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy."
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn-create">
                Create Account
              </button>
            </div>
            <div className="form-group">
              <Link className="sign-lnk" to="/signin">
                <span>Sign in</span> to your account
              </Link>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default Signup;
