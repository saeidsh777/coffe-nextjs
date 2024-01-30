import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(()=>{
    setSearch(router.query.q)
  },[])

  const searchHandlerWithEnter = (e) => {
    if (e.keyCode === 13) {
      if (search.trim()) {
        router.push(`/search?q=${search}`);
      }
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <div className="d-flex align-items-center position-relative">
            <Link href="/" className="navbar-brand px-lg-4 m-0">
              <h1 className="m-0 display-4 text-uppercase text-white">
                Next-Coffee
              </h1>
            </Link>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={searchHandlerWithEnter}
              type="text"
              className="search_input"
              placeholder="Search..."
            />
            <FontAwesomeIcon
              onClick={searchHandler}
              className="search_icon"
              icon={faSearch}
            />
          </div>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4">
              <Link
                href="/"
                className={`${
                  router.pathname === "/"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  router.pathname === "/about"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${
                  router.pathname === "/services"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }`}
              >
                Service
              </Link>
              <Link
                href="/menu"
                className={`${
                  router.pathname === "/menu"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }`}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className={`${
                  router.pathname === "/contact"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}
