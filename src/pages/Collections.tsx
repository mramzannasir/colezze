import Head from "../components/Head";
import "../styles/globals.css";

const Collections = () => {
  return (
    <div className="collectionsContainer wrapper">
      <Head title="COLEZZE | Collections" />
      <div className="collection-img">
        <img
          src="../../images/Colezze-©-jacket-box-copy-1.png"
          alt="Background"
          className="backgroundImage"
        />
      </div>
      <div className="collection">
        <h2>AUTUMN-WINTER 2024</h2>
        <p>COMING SOON...</p>
      </div>
    </div>
  );
};

export default Collections;
