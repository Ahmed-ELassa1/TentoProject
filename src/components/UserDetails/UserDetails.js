import "./userDetails.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserDetails = () => {
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
        // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
    >
      {({ errors, status, touched }) => (
        <section className="user-container">
          <Form className="user-form">
            <div className="user-contain">
              <div className="left-content">
                <div className="form-group">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Ahmed Elassal"
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
                    type="email"
                    placeholder="ahmed@gmail.com"
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
              </div>

              <div className="right-content">
                <div className="form-group">
                  <Field
                    name="newEmail"
                    type="text"
                    placeholder="New Email"
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
                    placeholder="New Password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                    style={{ marginBottom: "0" }}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                  <span className="pass-hint">
                    Enable two factor authencation on the security page
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group btns" style={{ marginTop: "0" }}>
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default UserDetails;
