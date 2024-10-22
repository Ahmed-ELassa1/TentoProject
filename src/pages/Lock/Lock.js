import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Lock = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        password: "",
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .password("Password is invalid")
          .required("Password is required"),
      })}
      onSubmit={(fields) => {
        navigate("/");
      }}
    >
      {({ errors, status, touched }) => (
        <section className="form-container">
          <h2>Reset Password</h2>
          <Form className="sign-form">
            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Enter your Password"
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
              <button type="submit" className="btn-create">
                Submit
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default Lock;
