import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "../assets/styles/pages/ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <Navigation />
      <h1 className="error-message"> Oops ! An error as ocurred ... </h1>
      <Footer />
    </>
  );
}

export default ErrorPage;
