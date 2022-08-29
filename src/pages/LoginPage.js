import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
//----------prime-react
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { keys } from "../Constant";
//-----------------------
const validationSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required filed"),
  password: yup.string().min(2, "too short").required("required field  "),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        navigate("dashboard", { replace: false });
        localStorage.setItem(keys.loginToken, values);
      }
    },
    validationSchema,
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  return (
    <div className="flex align-items-center justify-content-center mt-5">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Azhand</div>
        </div>

        <div>
          <div className="field mb-4">
            <span className="p-float-label p-input-icon-right w-full">
              <i className="pi pi-envelope" />
              <InputText
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={"w-full"}
              />
              <label
                htmlFor="email"
                className={classNames({
                  "p-error": isFormFieldValid("email"),
                })}
              >
                Email*
              </label>
            </span>
            {getFormErrorMessage("email")}
          </div>
          <div className="field w-full">
            <span className="p-float-label p-input-icon-right w-full">
              <i
                className={showPassword ? "pi pi-eye" : "pi pi-lock-open"}
                onClick={() => setShowPassword(!showPassword)}
              />
              <InputText
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type={showPassword ? "text" : "password"}
                className={"w-full"}
              />
              <label htmlFor="password" className={"w-full"}>
                Password*
              </label>
            </span>
            {getFormErrorMessage("password")}
          </div>

          <Button
            label="login"
            className="w-full"
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
