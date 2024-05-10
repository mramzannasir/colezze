/* eslint-disable prefer-const */
import { ChangeEvent, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/globals.css";

type FormData = {
  email: string;
};

type Touched = {
  [K in keyof FormData]?: boolean;
};

const isValidEmail = (email: string) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const [touched, setTouched] = useState<Touched>({
    email: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target as HTMLInputElement;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const shouldMarkError = (field: keyof FormData) => {
    const value = formData[field];
    let hasError = false;
    let isEmpty = value.trim() === "";

    if (isEmpty) {
      hasError = true;
    } else if (field === "email") {
      hasError = !isValidEmail(value);
    }

    const shouldShow = touched[field];
    return { hasError, shouldShow, isEmpty };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof FormData]) {
        setTouched((prev) => ({ ...prev, [field]: true }));
      }
    });

    const formIsValid = Object.keys(formData).every((field) => {
      const errorState = shouldMarkError(field as keyof FormData);
      return !errorState.hasError;
    });

    if (!formIsValid) {
      console.log("Please fill in all required fields correctly");
      return;
    }

    // Handle the form submission logic here
    // (e.g., send the formData to a server or process it in some way)
    // Reset the form if needed and handle success message
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <form onSubmit={handleSubmit} className=" formInput">
        <div
          className={`  ${
            shouldMarkError("email").shouldShow &&
            shouldMarkError("email").hasError
              ? "errorContainerNewsletter"
              : ""
          }`}
        >
          <div className="promoTextContainerNewsletter">
            <p className="promoTextNewsletter">
              BE THE FIRST TO ACCESS COLEZZE LAUNCH
            </p>
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`newsletterForm ${
                shouldMarkError("email").shouldShow &&
                shouldMarkError("email").hasError
                  ? "errorInputNewsletter"
                  : ""
              }`}
              placeholder="Enter your email address"
            ></input>
            <button type="submit" className="submitButtonNewsletter">
              SIGN UP
            </button>
          </div>

          <div style={{ height: "20px" }}>
            {shouldMarkError("email").shouldShow &&
              (shouldMarkError("email").isEmpty ? (
                <p className="errorTextNewsletter">Email address is required</p>
              ) : (
                <p className="errorTextNewsletter">
                  Please enter a valid email address
                </p>
              ))}
          </div>
        </div>
      </form>
      <div className="footerContent container">
        <div>
          <span>Copyright COLEZZE {currentYear}. All rights reserved.</span>
        </div>
        <div className="footerHelp">
          <span className="footerHelpText">ANY QUESTIONS?</span>
          <Link to="/contact" className="footerLinkButton" draggable={false}>
            <span className="footerLink">Contact Us</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
