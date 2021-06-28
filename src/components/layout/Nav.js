/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import cx from "classnames";
import useOnClickOutside from "../../utils/useOnClickOutside";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { appDescription } from "../../data/MyAppFeaturesData";

export default function Nav(props) {
  const { pathname } = useLocation();
  const menuRef = React.useRef();

  const [isMobileActive, setMobileActive] = React.useState(false);
  const toggleMobileMenu = () => setMobileActive(!isMobileActive);

  // hide menu on navigation click (change)
  React.useEffect(() => {
    setMobileActive(false);
  }, [pathname]);
  // hide menu on outside click
  useOnClickOutside(menuRef, () => setMobileActive(false));

  return (
    <nav
      ref={menuRef}
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Nav.Link href="https://miniplatform.cloud">
          <Nav.Logo />
        </Nav.Link>
        <Nav.ToggleButton
          onClick={toggleMobileMenu}
          className={cx({ "is-active": isMobileActive })}
        />
      </div>

      <div className={cx("navbar-menu", { "is-active": isMobileActive })}>
        {props.children}
      </div>
    </nav>
  );
}
Nav.Link = (props) => {
  const className = cx("navbar-item", props.className);
  if (props.href) {
    return <a {...props} className={className} />;
  }
  return (
    <NavLink {...props} className={className} activeClassName="is-active" />
  );
};
Nav.ToggleButton = (props) => {
  return (
    <a
      {...props}
      role="button"
      className={cx("navbar-burger burger is-unselectable", props.className)}
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
};

Nav.Logo = () => (
  <img src={appDescription.logo} width="80px" height="40px" alt="logo" />
);
