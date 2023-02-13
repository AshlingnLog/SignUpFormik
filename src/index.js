import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          alert("Login Successful");
        }}

        // Figure out how to add exception
        // validate: (values) => {
        //  let errors = {};
        //  if (!values.email) errors.email = "field required";
        //if (!values.password) errors.password = "field required";
        // return errors;
      >
        <Form>
          <div> Name: </div>
            <Field name="name" type="text" />
          <div> Email: </div>
            <Field name="email" type="email" />
          <div> Password: </div>
            <Field name="password" type="password" />
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <checkbox>
         </div>
        </Form>
      </Formik>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
