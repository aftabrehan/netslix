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
      // window.removeEventListener("scroll", true);
    };
  }, []);

  return (
    <div className={`nav ${show && stl.navBlack}`}>
      <img className={stl.navLogo} src="/logo.png" alt="Netflix Logo" />
      {/* <img
        className="nav__avatar"
        src="https://media.istockphoto.com/vectors/user-profile-login-or-access-authentication-icon-button-set-people-vector-id1189895797?s=170x170"
        alt="Avatar"
      /> */}
      <i className={`fa fa-user ${stl.navAvatar}`}></i>
    </div>
  );
}

export default Nav;
