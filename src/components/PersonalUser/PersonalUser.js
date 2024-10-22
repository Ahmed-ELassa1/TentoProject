import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const PersonalUser = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        postal: "",
        city: "",
        country: "",
        email: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        address: Yup.string().required("Address is required"),
        postal: Yup.string().required("Postal Code is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
      })}
      onSubmit={(fields) => {
        // code
      }}
    >
      {({ errors, status, touched }) => (
        <section className="user-container" style={{ marginTop: "20px" }}>
          <h2 className="tab-heading">Personal Information</h2>
          <Form className="user-form" style={{ marginTop: "20px" }}>
            <div className="user-contain">
            <div className="left-content">
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
                  name="address"
                  type="text"
                  placeholder="Permanent Address"
                  className={
                    "form-control" +
                    (errors.address && touched.address ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  name="postal"
                  type="text"
                  placeholder="Postal Code"
                  className={
                    "form-control" +
                    (errors.postal && touched.postal ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="postal"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="right-content">
              <div className="form-group">
                <Field
                  name="email"
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
                  name="city"
                  placeholder="City"
                  type="text"
                  className={
                    "form-control" +
                    (errors.city && touched.city ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  name="country"
                  placeholder="Country"
                  type="text"
                  className={
                    "form-control" +
                    (errors.country && touched.country ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            </div>

            <div className="btns" style={{ marginTop: "0" }}>
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

export default PersonalUser;
