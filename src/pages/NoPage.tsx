import Head from "../components/Head";
import "../styles/globals.css";

import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <Head title={"COLEZZE | 404"} />
      <div className="noPageContainer">
        <div className="notFoundWrapper">
          <div className="notFoundText">
            <h2>404</h2>
            <p>Page not found</p>
            <p id="additionalText">
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
            <Link to="/">
              <a className="returnHomeButton">Return to homepage</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
