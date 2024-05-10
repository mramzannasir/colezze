/* eslint-disable prefer-const */
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "../styles/globals.css";
import Head from "../components/Head";

const phonePrefix = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+335",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+379",
  "+380",
  "+381",
  "+382",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+590",
  "+591",
  "+592",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998",
  "+1242",
  "+1246",
  "+1248",
  "+1264",
  "+1268",
  "+1340",
  "+1345",
  "+1441",
  "+1473",
  "+1648",
  "+1649",
  "+1664",
  "+1670",
  "+1671",
  "+1721",
  "+1758",
  "+1767",
  "+1784",
  "+1868",
  "+1869",
];
type FormValues = {
  name: string;
  email: string;
  phonePrefix: string;
  phoneNumber: string;
  message: string;
};
const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(
        /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
        "Please check the Name"
      ),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email address is required"),
    phonePrefix: Yup.string().required("Phone prefix is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{5,15}$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phonePrefix: phonePrefix[0],
    phoneNumber: "",
    message: "",
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="contactContainer">
      <Head title="COLEZZE | Contact" />
      <div className="contact container2">
        <h2>Contact Us</h2>
        <p>REACH OUT VIA EMAIL AT</p>
        <p>
          <a href="mailto:info@colezze.com" className="emailLink">
            INFO<span className="atSymbol">&#64;</span>
            COLEZZE.COM
          </a>
        </p>
        <p>OR THROUGH THE FORM BELOW,</p>
        <p>
          AND WE WILL PROVIDE A RESPONSE WITHIN 24 HOURS FROM MONDAY TO SATURDAY
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form style={{ width: "100%" }}>
              <div className="formikField">
                <label htmlFor="name" className="contactLabel">
                  NAME *
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`inputField ${
                    touched.name && errors.name ? "errorInput" : ""
                  }`}
                />
                <ErrorMessage name="name" component="p" className="errorText" />
              </div>

              <div className="formikField">
                <label htmlFor="email" className="contactLabel">
                  EMAIL ADDRESS *
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`inputField ${
                    touched.email && errors.email ? "errorInput" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="errorText"
                />
              </div>

              <div className="formikFieldPhone">
                <label htmlFor="phonePrefix" className="contactLabel">
                  PHONE NUMBER *
                </label>
                <div style={{ display: "flex", gap: ".5rem" }}>
                  <Field
                    as="select"
                    name="phonePrefix"
                    className={`phonePrefixSelect ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "errorInput"
                        : ""
                    }`}
                  >
                    {phonePrefix.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </Field>
                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={`phoneNumberInput ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "errorInput"
                        : ""
                    }`}
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="errorTextPhone"
                />
              </div>

              <div className="formikField">
                <label htmlFor="message" className="contactLabel">
                  MESSAGE *
                </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className={`textareaField ${
                    touched.message && errors.message ? "errorInput" : ""
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="errorTextMessage"
                />
              </div>

              <div className="submitContainer">
                <button
                  type="submit"
                  className="submitButton"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <span className="disclaimerText">
                  By pressing the submit button, I agree to COLEZZE contacting
                  me by email and/or phone. I also understand that any
                  information shared in this form is subject to COLEZZE’s
                  Privacy Policy.
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
