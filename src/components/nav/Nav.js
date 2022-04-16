import Image from "next/image";
import React, { useEffect, useState } from "react";

import stl from "./Nav.module.scss";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow, false);
    };
  }, []);

  return (
    <div className={`${stl.nav} ${show && stl.navBlack}`}>
      <img className={stl.navLogo} src="./logo-nav.svg" alt="Netflix Logo" />
      <img
        className={stl.navAvator}
        src="https://media.istockphoto.com/vectors/user-profile-login-or-access-authentication-icon-button-set-people-vector-id1189895797?s=170x170"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
