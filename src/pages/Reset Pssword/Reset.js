import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./reset.css";

const Reset = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
      })}
      onSubmit={(fields) => {
        navigate("/verify-email");
      }}
    >
      {({ errors, status, touched }) => (
        <section className="form-container">
          <h2>Reset Password</h2>
          <Form className="sign-form">
            <div className="form-group">
              <Field
                name="email"
                type="text"
                placeholder="Enter your Email"
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
              <button type="submit" className="btn-create">
                Submit
              </button>
            </div>
            <div className="form-group">
              <Link style={{ marginTop: "20px" }} className="sign-lnk">
                Don't get code?<span> Resend</span>
              </Link>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default Reset;
