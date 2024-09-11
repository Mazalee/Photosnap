"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Close from "../../public/shared/mobile/close.svg";
import Menu from "../../public/shared/mobile/menu.svg";
import Logo from "../../public/shared/desktop/logo.svg";
import Image from "next/image";

const links = [
  { href: "/stories", label: "stories" },
  { href: "/features", label: "features" },
  { href: "/pricing", label: "pricing" },
];

const NavLeft = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarRef = useRef();

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isSidebarOpen && <div className="nav-overlay"></div>}
      <div
        className={`sidebar ${
          isSidebarOpen ? "sidebar-visible" : "sidebar-invisible"
        }`}
      >
        <nav className="mobile-nav">
          <ul>
            {links.map((link) => (
              <Link
                className="mobile-links"
                onClick={() => setIsSidebarOpen(false)}
                ref={sidebarRef}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <div className="underline"></div>
            <button className="btn-mobile btn-input demo-btn btn-large">
              get an invite
            </button>
          </ul>
        </nav>
      </div>

      <div className="nav-left">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu">
          {isSidebarOpen ? (
            <Image src={Close} alt="close-icon" onClick={toggleSidebar} />
          ) : (
            <Image src={Menu} alt="open-icon" onClick={toggleSidebar} />
          )}
        </div>

        <div className="links-container">
          <ul>
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <Link className="links" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavLeft;
