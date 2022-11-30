import React from "react";
import ClientLogo from "../../assets/images/client_logo_01.png";
import ClientLogo_a from "../../assets/images/client_logo_02.png";
import ClientLogo_b from "../../assets/images/client_logo_03.png";
import ClientLogo_c from "../../assets/images/client_logo_04.png";

const ClientPartner = () => {
  return (
    <section className="client-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={ClientLogo} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={ClientLogo_a} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={ClientLogo_b} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={ClientLogo_c} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPartner;
